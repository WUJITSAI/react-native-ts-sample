import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import Button from "./Button";

const NumberPannel = () => {
    return (
        <View style={styles.numberPannel}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {
                    ['7', '8', '9'].map(item => <Button
                        viewStyle={styles.darkGray}
                        textValue={item}
                        textStyle={styles.text1}
                        onPress={() => console.log(item)} />)
                }
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {
                    ['4', '5', '6'].map(item => <Button
                        viewStyle={styles.darkGray}
                        textValue={item}
                        textStyle={styles.text1}
                        onPress={() => console.log(item)} />)
                }
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {
                    ['1', '2', '3'].map(item => <Button
                        viewStyle={styles.darkGray}
                        textValue={item}
                        textStyle={styles.text1}
                        onPress={() => console.log(item)} />)
                }
            </View>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <TouchableOpacity style={styles.zero}>
                    <Text style={styles.text1}> 0 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.darkGray}>
                    <Text style={styles.text1}> . </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    numberPannel: {
        flex: 4,
    },
    text1: {
        color: 'white',
        fontSize: 30,
    },
    zero: {
        backgroundColor: 'darkgray',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
    },
    darkGray: {
        backgroundColor: 'darkgray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
      },
});

export default NumberPannel