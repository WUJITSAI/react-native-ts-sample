import React from 'react';
import {
    View,
    Text,
    ViewStyle,
    StyleProp,
    TextStyle,
    TouchableOpacity,
} from 'react-native';


const Button = ({
    viewStyle,
    textStyle,
    textValue,
    onPress,
}: {
    viewStyle: StyleProp<ViewStyle>,
    textStyle: StyleProp<TextStyle>,
    textValue: string,
    onPress: ()=> void,
}): JSX.Element => {
    return (
        <TouchableOpacity style={viewStyle} onPress={onPress}>
            <Text style={textStyle}> {textValue} </Text>
        </TouchableOpacity>
    )
}

export default Button