import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'


export const ResultItem = ({business})=>{
    return (<View>
        <Image 
        source={{uri: business.image_url}}
        style={styles.imgStyle}
        />
        <Text style={styles.name}>{business.name}</Text>
        <Text style={styles.rating}>{business.rating} stars, {business.review_count} reviews</Text>
    </View>)
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 250,
        borderRadius: 5, 
        height: 120,
        marginLeft: 15,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    rating: {
        marginLeft: 15,
        marginBottom: 5
    }
})