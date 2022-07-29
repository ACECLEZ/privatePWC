import React, {useEffect} from 'react';
import {ScrollView, Alert} from "react-native";
import ContactRow from "../components/ContactRow";
import Divider from "../components/Divider";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebaseConfig";

const chats = [
    {
        name: 'Fıratcan Ulukaya',
        subtitle: 'Lorem ipsum dolor sit amet.'
    },
    {
        name: 'Mert Bakımcı',
        subtitle: 'Lorem ipsum dolor sit amet.'
    },
    {
        name: 'Ahmet Samet Kızğın',
        subtitle: 'Lorem ipsum dolor sit amet.'
    }
]

const ChatList = ({navigation}) => {

    useEffect(() => {
        onAuthStateChanged(auth, usr => {
            if (!usr) return navigation.navigate('SignIn')
        })
    }, [])

    return (
        <ScrollView>
            {chats.map((chat, index) => (
                <React.Fragment key={index}>
                    <ContactRow {...chat} onPress={() => navigation.navigate('Chat')}/>
                    <Divider/>
                </React.Fragment>
            ))}
        </ScrollView>
    )
}

export default ChatList;
