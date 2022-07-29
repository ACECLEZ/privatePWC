import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from "react-native";
import {colors} from "../config/constants";
import {Ionicons} from "@expo/vector-icons";
import {auth} from "../firebaseConfig";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

const SignUp = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async usr => {
                await updateProfile(auth.currentUser, {displayName: name})
                    .catch(console.warn)
                navigation.popToTop();
            })
            .catch(e => alert(e.message))
    }

    return (
        <SafeAreaView>
            <View style={styles.content}>
                <Text style={styles.title}>Create New Account</Text>
                <TextInput style={styles.input} placeholder="Name Surname" onChangeText={text => setName(text)}/>
                <TextInput keyboardType="email-address" style={styles.input} placeholder="Email"
                           onChangeText={text => setEmail(text)}/>
                <TextInput textContentType="password" style={styles.input} secureTextEntry={true}
                           placeholder="Password" onChangeText={text => setPassword(text)}/>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.text}>Do you have account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.textAlt}>Sign in.</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btn} activeOpacity={.7} onPress={register}>
                    <Ionicons name="heart-outline" color={colors.secondaryColor} size={16}/>
                    <Text style={styles.btnText}>Sign Up</Text>
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

export default SignUp;
