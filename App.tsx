import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle
} from 'react-native';

type BottonProbs = {
  viewStyle: StyleProp<ViewStyle>,
  textStyle: StyleProp<TextStyle>,
  textValue: string,
}

const Botton = ({
  viewStyle,
  textStyle,
  textValue,
}: {
  viewStyle: StyleProp<ViewStyle>,
  textStyle: StyleProp<TextStyle>,
  textValue: string,
}): JSX.Element => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {textValue} </Text>
    </View>
  )
}

const App = () => {


  return (
    <View style={styles.continur}>

      <View style={styles.box1} />
      <View style={styles.box2} >
        {
          ['AC', '+/-', '%'].map(
            item => <Botton viewStyle={styles.gray} textStyle={styles.text1} textValue={item} />
          )
        }
        <View style={styles.box4}>
          <Text style={styles.text1}> 除 </Text>
        </View>
      </View>

      <View style={styles.box2} >
        {
          ['7', '8', '9'].map(
            item => <Botton viewStyle={styles.darkGray} textStyle={styles.text1} textValue={item} />
          )
        }
        <View style={styles.box4}>
          <Text style={styles.text1}> X </Text>
        </View>
      </View>

      <View style={styles.box2} >
        {
          ['4', '5', '6'].map(
            item => <Botton viewStyle = {styles.darkGray} textStyle = {styles.text1} textValue = {item} />
          )
        }
        <View style={styles.box4}>
          <Text style={styles.text1}> + </Text>
        </View>
      </View>

      <View style={styles.box2} >
        {
          ['1', '2', '3'].map(
            item => <Botton viewStyle = {styles.darkGray} textStyle = {styles.text1} textValue = {item} />
          )
        }
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
  box4: {
    backgroundColor: 'orange',
    flex: 1,
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
    //borderColor:'black',
    //borderStyle:'solid',
  },
  gray: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    margin: 1,
    //borderLeftWidth:1/PixelRatio.get(),
    //borderLeftColor:1/PixelRatio.get(),
  },
  zero: {
    backgroundColor: 'darkgray',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin:1,
    
  },
  text1: {
    color: 'white',
    fontSize: 30,
  }
});

export default App;
