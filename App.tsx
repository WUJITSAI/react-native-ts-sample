import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import Button from './src/components/Button'
import OperatorPannel from './src/components/OpreatorPannel';
import DispalyPannel from './src/components/DispalyPannel';
import ExtendedOpreatorPannel from './src/components/ExtendedOpreatorPannel'
import NumberPannel from './src/components/NumberPannel'

const App = () => {


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

export default App;
