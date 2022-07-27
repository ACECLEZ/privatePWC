import React from 'react';
import {ScrollView, Alert} from "react-native";
import ContactRow from "../components/ContactRow";

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

const ChatList = () => {
    return (
        <ScrollView>
            {chats.map((chat, index) => (
                <ContactRow key={index} {...chat}/>
            ))}
        </ScrollView>
    )
}

export default ChatList;
