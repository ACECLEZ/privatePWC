import React, {useEffect, useState} from 'react';
import {ScrollView} from "react-native";
import ContactRow from "../components/ContactRow";
import Divider from "../components/Divider";
import {onAuthStateChanged} from "firebase/auth";
import {auth, db} from "../firebaseConfig";
import {onSnapshot, collection, query, where} from 'firebase/firestore'

const ChatList = ({navigation}) => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, usr => {
            if (!usr) return navigation.navigate('SignIn')
        })
    }, [])

    useEffect(() => {
        onAuthStateChanged(auth, usr => {
            if(usr) {
                onSnapshot(query(collection(db, "chats"), where('users', 'array-contains', usr.email)), async (snapshot) => {
                    await setChats(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
                })
            }
        })
    }, [])

    return (
        <ScrollView>
            {chats.map((chat, index) => (
                <React.Fragment key={index}>
                    <ContactRow name={chat.users.find(x => x !== auth.currentUser.email)} subtitle="No messages"
                                onPress={() => navigation.navigate('Chat', {id: chat.id})}/>
                    <Divider/>
                </React.Fragment>
            ))}
        </ScrollView>
    )
}

export default ChatList;

