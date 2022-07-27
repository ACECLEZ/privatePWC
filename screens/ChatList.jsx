import React, {useEffect} from 'react';
import {ScrollView, Alert} from "react-native";
import ContactRow from "../components/ContactRow";
import Divider from "../components/Divider";

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
        const isLoggedIn = false;

        if (!isLoggedIn) {
            navigation.navigate('SignUp')
        }
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
