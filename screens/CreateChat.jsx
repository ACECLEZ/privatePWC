import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from "react-native";
import {colors} from "../config/constants";
import {Ionicons} from "@expo/vector-icons";
import {addDoc, collection} from 'firebase/firestore'
import {auth, db} from "../firebaseConfig";

const CreateChat = ({navigation}) => {
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
        await addDoc(collection(db, "chats"), {
            users: [auth.currentUser.email, email],
            messages: []
        })
            .then(doc => navigation.navigate('Chat', {id: doc.id}))
            .catch(e => alert(e.message))
    }

    return (
        <SafeAreaView>
            <View style={styles.content}>
                <Text style={styles.title}>Let's Chat</Text>
                <TextInput keyboardType="email-address" textContentType='emailAddress' style={styles.input} placeholder="Email"
                           onChangeText={text => setEmail(text)}/>

                <TouchableOpacity style={styles.btn} activeOpacity={.7} onPress={handleSubmit}>
                    <Ionicons name="chatbox-outline" color={colors.secondaryColor} size={16}/>
                    <Text style={styles.btnText}>Chat!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 32
    },
    title: {
        fontSize: 36,
        fontWeight: '800',
        color: colors.thirdColor,
    },
    input: {
        backgroundColor: colors.secondaryColor,
        fontSize: 15,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 6,
        marginTop: 15,
        marginBottom: 4,
        color: colors.thirdColor
    },
    text: {
        color: colors.secondaryTextColor,
        marginRight: 5,
        marginStart: 3
    },
    textAlt: {
        color: colors.thirdColor,
    },
    btn: {
        backgroundColor: colors.thirdColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 6,
        marginTop: 20,
        flexDirection: 'row'
    },
    btnText: {
        color: colors.secondaryColor,
        marginLeft: 8
    }
})

export default CreateChat;
