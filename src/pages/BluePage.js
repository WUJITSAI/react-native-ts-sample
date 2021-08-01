import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container} >
            <Button color="white" title="PressMe" onPress={() => navigation.navigate('RED')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor:'blue', 
        justifyContent:'center', 
        alignItems:'center'
    }
})