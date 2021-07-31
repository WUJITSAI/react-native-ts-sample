import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import Button from './Button'

const OperatorPannel = () => {
    return (
        <View style={styles.opreatorPannel}>
            {
                ['除', 'X', '-', '+', '='].map(item => <Button
                    viewStyle={styles.box4}
                    textStyle={styles.text1}
                    textValue={item}
                    onPress={() => console.log(item)} />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    box4: {
        backgroundColor: 'orange',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
    },
    text1: {
        color: 'white',
        fontSize: 30,
    },
    opreatorPannel: {
        backgroundColor: 'white',
        flex: 1,
    }
});

export default OperatorPannel