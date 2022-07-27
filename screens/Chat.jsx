import React, {useState, useCallback, useEffect} from 'react'
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat'
import {colors} from "../config/constants";
import {Ionicons} from "@expo/vector-icons";
import {View} from "react-native";

const renderBubble = props => {
    return (
        <Bubble {...props} wrapperStyle={{
            right: {
                backgroundColor: colors.thirdColor,
            },
            left: {
                backgroundColor: colors.secondaryColorAlt,
            }
        }}
                textStyle={{
                    right: {
                        color: colors.primaryColor,
                    },
                    left: {
                        color: colors.primaryTextColor,
                    }
                }}
        />
    )
}
const scrollToBottomComponent = () => {
    return (
        <Ionicons name="arrow-down-outline" size={20}/>
    )
}
const renderInputToolbar = props => {
    return (
        <InputToolbar {...props}
                      containerStyle={{
                          backgroundColor: colors.secondaryColor,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          paddingHorizontal: 0,
                          paddingVertical: 0,
                          marginTop: 0,
                          marginBottom: 0,
                      }}
                      placeholder={'Your message...'}
                      textInputStyle={{
                          color: colors.primaryTextColor,
                          fontSize: 15,
                      }}/>
    )
}
const renderSend = props => {
    return (
        <Send {...props}>
            <View>
                <Ionicons name="send" size={24} style={{
                    marginBottom: 10,
                    marginRight: 10,
                }} color={colors.thirdColor}/>
            </View>
        </Send>
    )
}

const Chat = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hi',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            multiline={false}
            renderBubble={renderBubble}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
            renderInputToolbar={renderInputToolbar}
            renderSend={renderSend}
        />
    )
}

export default Chat
