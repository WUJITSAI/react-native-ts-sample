import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container} >
            <Button title="SHARE" onPress={() => {}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    }
})