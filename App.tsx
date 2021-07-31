import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {


  return (
    <View style={styles.continur}>

      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />

    </View>
  );
};

const styles = StyleSheet.create({

  continur:{
    height:500,
    width:380,
    backgroundColor:'black',
    flexDirection:'column-reverse',
    justifyContent:'space-between',
    alignItems:'center',
    

  },
  box1:{
    backgroundColor:'blue',
    height:100,
    width:100,
  },
  box2:{
    backgroundColor:'red',
    height:100,
    width:100,
  },
  box3:{
    backgroundColor:'yellow',
    height:100,
    width:100,
  },

});

export default App;
