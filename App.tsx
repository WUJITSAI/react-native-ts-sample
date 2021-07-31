import React from 'react';
import { View, StyleSheet, Text,PixelRatio } from 'react-native';

const App = () => {


  return (
    <View style={styles.continur}>

      <View style={styles.box1} />
      <View style={styles.box2} >
        <View style={styles.gray}>
          <Text style={styles.text1}> AC </Text></View>
        <View style={styles.gray}>
          <Text style={styles.text1}> +/- </Text></View>
        <View style={styles.gray}>
          <Text style={styles.text1}> % </Text></View>
        <View style={styles.box4}>
          <Text style={styles.text1}> 除 </Text></View>
      </View>
      <View style={styles.box3} >
        <View style={styles.darkGray}>
          <Text style={styles.text1}> 7 </Text>
        </View>
        <View style={styles.darkGray}>
          <Text style={styles.text1}> 8 </Text>
        </View>
        <View style={styles.darkGray}>
          <Text style={styles.text1}> 9 </Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text1}> X </Text>
        </View>
      </View>
      <View style={styles.box2} >
        <View style={styles.darkGray}>
          <Text style={styles.text1}> 4 </Text>
        </View>
        <View style={styles.darkGray}>
          <Text style={styles.text1}> 5 </Text>
        </View>
        <View style={styles.darkGray}>
          <Text style={styles.text1}> 6 </Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text1}> + </Text>
        </View>
      </View>
      <View style={styles.box3} >
        <View style={styles.darkGray}>
          <Text style={styles.text1}> 1 </Text>
        </View>
        <View style={styles.darkGray}>
          <Text style={styles.text1}> 2 </Text>
        </View>
        <View style={styles.darkGray}>
          <Text style={styles.text1}> 3 </Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text1}> - </Text>
        </View>
      </View>
      <View style={styles.box2} >
        <View style={styles.zero}>
          <Text style={styles.text1}> 0 </Text>
        </View>
        <View style={styles.darkGray}>
          <Text style={styles.text1}> . </Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text1}> = </Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  continur: {
    flex: 1,
    backgroundColor: 'black',
    //flexDirection:'column-reverse',
    //justifyContent:'center',
    //alignItems:'center',
  },
  box1: {
    backgroundColor: 'black',
    flex: 1.5,
  },
  box2: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    
  },
  box3: {
    backgroundColor: 'yellow',
    flex: 1,
    //alignItems:'center',
    flexDirection: 'row',
  },
  box4: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkGray: {
    backgroundColor: 'darkgray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //borderColor:'black',
    //borderStyle:'solid',
  },
  gray: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'white',
    margin:1,
    //borderLeftWidth:1/PixelRatio.get(),
    //borderLeftColor:1/PixelRatio.get(),
  },
  zero: {
    backgroundColor: 'darkgray',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 30,
  }
});

export default App;
