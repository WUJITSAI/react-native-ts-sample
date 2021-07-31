import React from "react";
import {
    View,
    StyleSheet,
} from 'react-native';

import Button from "./Button";

const ExtendedOpreatorPannel = () => {
    return(<View style={styles.extendedOpreatorPannel}>
        {
            ['AC', '+/-', '%'].map(item => <Button
                viewStyle={styles.gray}
                textStyle={styles.text1}
                textValue={item}
                onPress={() => console.log(item)} />)
        }
    </View>)
}

const styles = StyleSheet.create({
    extendedOpreatorPannel: {
        backgroundColor: 'white',
        flex: 1,
        margin: 1,
        flexDirection: 'row',
    },
    gray: {
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        margin: 1,
      },

  text1: {
    color: 'white',
    fontSize: 30,
  }
});

export default ExtendedOpreatorPannel