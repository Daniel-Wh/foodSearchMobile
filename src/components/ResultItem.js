import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'


export const ResultItem = ({business})=>{
    return (<View>
        <Image 
        source={{uri: business.image_url}}
        style={styles.imgStyle}
        />
        <Text style={styles.name}>{business.name}</Text>
        <Text>{business.rating} stars, {business.review_count} reviews</Text>
    </View>)
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 250,
        borderRadius: 5, 
        height: 120,
        margin: 20
    },
    name: {
        fontWeight: 'bold',
    }
})