import React from 'react';
import {View, StyleSheet} from "react-native";
import {colors} from "../config/constants";

const Divider = () => {
    return (
        <View style={styles.div}/>
    )
}

const styles = StyleSheet.create({
    div: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.secondaryColorAlt,
        marginStart: 60,
    }
})

export default Divider;
