import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from "react-native";
import {colors} from "../config/constants";
import {Ionicons} from "@expo/vector-icons";

const SignIn = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView>
            <View style={styles.content}>
                <Text style={styles.title}>Sign in to Account</Text>
                <TextInput keyboardType="email-address" style={styles.input} placeholder="Email"
                           onChangeText={text => setEmail(text)}/>
                <TextInput textContentType="password" style={styles.input} secureTextEntry={true}
                           placeholder="Password" onChangeText={text => setPassword(text)}/>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.text}>Do you need a account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.textAlt}>Sign up.</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btn} activeOpacity={.7}>
                    <Ionicons name="rocket-outline" color={colors.secondaryColor} size={16}/>
                    <Text style={styles.btnText}>Sign In</Text>
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

export default SignIn;
