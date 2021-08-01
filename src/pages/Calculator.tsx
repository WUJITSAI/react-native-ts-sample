import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import Button from '../components/Button'
import OperatorPannel from '../components/OpreatorPannel';
import DispalyPannel from '../components/DispalyPannel';
import ExtendedOpreatorPannel from '../components/ExtendedOpreatorPannel'
import NumberPannel from '../components/NumberPannel'

const Calculator = () => {


  return (
    <View style={styles.continur}>
      <DispalyPannel />
      <View style={styles.otherPannel}>
        <OperatorPannel />
        <View style={{ flex: 3 }}>
          <ExtendedOpreatorPannel />
          <NumberPannel />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  continur: {
    flex: 1,
    backgroundColor: 'black',
  },
  otherPannel: {
    backgroundColor: 'white',
    flex: 5,
    flexDirection: 'row-reverse',
  }
});

export default Calculator;
