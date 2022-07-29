import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Modal, Text} from "react-native";
import ContactRow from "../components/ContactRow";
import Divider from "../components/Divider";
import {onAuthStateChanged} from "firebase/auth";
import {auth, db} from "../firebaseConfig";
import {onSnapshot, collection, query, where} from 'firebase/firestore'
import {Ionicons} from "@expo/vector-icons";
import {colors} from "../config/constants";

const ChatList = ({navigation}) => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, usr => {
            if (!usr) return navigation.navigate('SignIn')
        })
    }, [])

    useEffect(() => {
        onAuthStateChanged(auth, usr => {
            if (usr) {
                onSnapshot(query(collection(db, "chats"), where('users', 'array-contains', usr.email)), async (snapshot) => {
                    await setChats(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
                })
            }
        })
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                {chats.map((chat, index) => (
                    <React.Fragment key={index}>
                        <ContactRow name={chat.users.find(x => x !== auth.currentUser.email)}
                                    subtitle={chat.messages.length === 0 ? 'No messages' : chat.messages[0].text}
                                    onPress={() => navigation.navigate('Chat', {id: chat.id})}/>
                        <Divider/>
                    </React.Fragment>
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.addContainer} onPress={() => navigation.navigate('CreateChat')}>
                <Ionicons name="add" size={24} color={colors.primaryColor}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    addContainer: {
        width: 64,
        height: 64,
        backgroundColor: colors.secondaryColorAlt,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 16,
        right: 16
    }
})

export default ChatList;

