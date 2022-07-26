import React from 'react';
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {StatusBar} from "expo-status-bar";
import ChatList from "./screens/ChatList";
import Settings from "./screens/Settings";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Chat from "./screens/Chat";
import {SafeAreaView} from "react-native";
import {colors} from "./config/constants";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const defaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.primaryColor,
    },
};

const TabsNavigator = () => (
    <Tabs.Navigator screenOptions={({route}) => ({
        tabBarStyle: {
            backgroundColor: colors.primaryColorAlt,
        },
        headerStyle: {
            backgroundColor: colors.primaryColorAlt,
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerTintColor: 'black',
        tabBarIcon: ({focused, color, size}) => {
            return (
                <Ionicons name={route.name === 'ChatList' ? 'chatbubbles' : 'settings'}
                          size={size} color={color}/>
            )
        }
    })}>
        <Tabs.Screen name="ChatList" component={ChatList} options={{title: "Chats"}}/>
        <Tabs.Screen name="Settings" component={Settings}/>
    </Tabs.Navigator>
)

const App = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.primaryColor}}>
            <StatusBar style="light"/>
                <NavigationContainer theme={defaultTheme}>
                    <Stack.Navigator>
                        <Stack.Screen name="Main" component={TabsNavigator} options={{headerShown: false}}/>
                        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
                        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
                        <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}}/>
                    </Stack.Navigator>
                </NavigationContainer>
        </SafeAreaView>
    )
}

export default App;
