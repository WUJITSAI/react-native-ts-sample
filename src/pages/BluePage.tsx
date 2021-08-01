import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default () => {
    const navigation = useNavigation()
    const [data, setData] = React.useState([{
        name:'AAa',
        age:30,
    }])

    const onAddPress = () => {
        console.log('aaaa');
        
        data.push({
            age: 30,
            name: 'KK',
        })
        setData([...data])
    }

    const renderMyItem = ({ name }: { name: string, age: number }) => {
        return (
            <View style={{ backgroundColor: 'red' }}>
                <Text>{name}</Text>
            </View>
        )
    }


    return (
        <View style={styles.container} >
            <FlatList 
            data={data} 
            renderItem={(item) => renderMyItem(item.item)} />
            
            <TouchableOpacity style={styles.touchableOpacityPorsition} onPress={onAddPress} >
                <View style={styles.touchableOpacityView} />
            </TouchableOpacity>
            <View style={styles.flatListView}></View>
        </View>
    )
}



// const Item = ({title}) =>{
//     return 
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
    flatListView: {
        backgroundColor: 'white',
        height: 10,
    },
    touchableOpacityView: {
        width: 50,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 25,
    },
    touchableOpacityPorsition: {
        position: "absolute",
        right: 20,
        bottom: 20,
    }
})