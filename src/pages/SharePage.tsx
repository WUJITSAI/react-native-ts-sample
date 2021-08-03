import React from 'react';
import {View, Button, StyleSheet, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Share, {Options} from 'react-native-share'
import images from '../images/imagesBase64'

const getOptions = (): Options => {
    const url = 'https://awesome.contents.com/';
    const title = 'Awesome Contents';
    const message = 'Please check this out.';
    const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
    return Platform.select({
        ios: {
            activityItemSources: [
                {
                    // For sharing url with custom title.
                    placeholderItem: { type: 'url', content: url },
                    item: {
                    default: { type: 'url', content: url },
                    },
                    subject: {
                    default: title,
                    },
                    linkMetadata: { originalUrl: url, url, title },
                },
                {
                    // For sharing text.
                    placeholderItem: { type: 'text', content: message },
                    item: {
                    default: { type: 'text', content: message },
                    message: null, // Specify no text to share via Messages app.
                    },
                    linkMetadata: {
                    // For showing app icon on share preview.
                    title: message,
                    },
                },
                {
                    // For using custom icon instead of default text icon at share preview when sharing with message.
                    placeholderItem: {
                    type: 'url',
                    content: icon,
                    },
                    item: {
                    default: {
                        type: 'text',
                        content: `${message} ${url}`,
                    },
                    },
                    linkMetadata: {
                    title: message,
                    icon: icon,
                    },
                },
            ],
        },
        default: {
            title,
            subject: title,
            message: `${message} ${url}`,
        },
    }); 
}

const shareMultipleImages = async () => {
    const shareOptions = {
      title: 'Share file',
      failOnCancel: false,
      urls: [images.image1, images.image2],
      message: `HELLO this is test: https://www.ariontechs.com`,
    };

    // If you want, you can use a try catch, to parse
    // the share response. If the user cancels, etc.
    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(ShareResponse);
      
    } catch (error) {
      console.log('Error =>', error);
    }
  };

const onSharePress = () => {
    
    shareMultipleImages()
    
}


export default () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container} >
            <Button title="SHARE" onPress={onSharePress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    }
})