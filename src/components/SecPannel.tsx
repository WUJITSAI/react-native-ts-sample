import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";

const SecPannel = () => {
    return (
        <View style={styles.secPannel} />
    )
}

const styles = StyleSheet.create(
    {
        secPannel: {
            backgroundColor: 'white',
            flex: 5,
            flexDirection: 'row-reverse',
        }
    }
);

export default SecPannel