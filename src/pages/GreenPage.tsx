import React from 'react';
import {
    View,
    Button,
    StyleSheet,
    FlatList,
    Text,
    RefreshControl
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native';

type PostData = {
    id: number,
    title: string,
    author: string,
}

export default () => {
    const navigation = useNavigation()
    const [data, setData] = React.useState([])
    const [loading, setLoading ] = React.useState(false)

    React.useEffect(() => {
        onMyPress();
    }, [])
    const renderMyItem = ({
        id,
        title,
        author,
    }: { id: number, title: string, author: string }) => {
        return (
            <View style={styles.viewBG}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.authorText}>{author}</Text>
            </View>
        );
    }
    const onRefresh = () =>{
        setData([]);
        onMyPress();

    }
    const onMyPress = async () => {
        setLoading(true);
        try {
            const respons = await fetch('http://localhost:3000/posts');
            if (respons.status === 200) {
                const body = await respons.json();
                setData(body);
                setLoading(false);
            }
            else {
                Alert.alert('fail' + respons.status);
                console.log(respons.status);
                setLoading(false);
            }
        }
        catch (error){
            Alert.alert(error);
            setLoading(false);
        }
    }

    return (
        <View style={styles.container} >
            <FlatList
                data={data}
                renderItem={({ item }) => renderMyItem(item)} 
                refreshControl={
                    <RefreshControl 
                        refreshing={loading}
                        onRefresh={onRefresh}/>
                }
                ItemSeparatorComponent={() => <View style={styles.line}/>}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    viewBG:{
        flex:1,
        backgroundColor: 'ivory',
    },
    titleText:{
        fontSize:20,
        color:'blue',
    },
    authorText:{
        fontSize:10,
        color:'darkorange',
    },
    line:{
        height:1,
        backgroundColor:'grey',
    }
})