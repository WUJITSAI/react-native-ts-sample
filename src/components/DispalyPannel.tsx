import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import Button from './Button'

const DispalyPannel = () => {
    return (
        <View style={styles.displayPannel} />
    )
}



const styles = StyleSheet.create({

    displayPannel: {
        flex: 1.5 
    }
});

export default DispalyPannel