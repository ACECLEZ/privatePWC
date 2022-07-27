import React from 'react';
import {View, StyleSheet} from "react-native";
import ContactRow from "../components/ContactRow";
import {colors} from "../config/constants";
import Divider from "../components/Divider";
import SettingsBtn from "../components/SettingsBtn";

const Settings = () => {
    return (
        <View>
            <ContactRow name="Fıratcan Ulukaya" subtitle="Lorem ipsum dolor sit amet." style={styles.settingsRow}/>

            <View style={{marginTop: 20}}>
                <SettingsBtn icon="walk-outline" title="Logout"
                             iconColor={colors.thirdColor}
                             iconBgColor={colors.primaryColor}/>
            </View>

            <View style={{marginTop: 20}}>
                <SettingsBtn icon="information-outline" title="Help"
                             iconColor={colors.primaryColor}
                             iconBgColor={colors.thirdColor}/>
                <Divider/>
                <SettingsBtn icon="heart" title="Tell a Friend"
                             iconColor={colors.secondaryTextColor}
                             iconBgColor={"#DC2626"}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    settingsRow: {
        backgroundColor: colors.secondaryColor,
        marginTop: 16,
    }
});

export default Settings;
