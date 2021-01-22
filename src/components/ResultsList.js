import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native'
import { ResultItem } from './ResultItem'


export const ResultsList = ({title, results}) => {


    return (<View style={styles.container}> 
        <Text
        style={styles.titleStyle}>{title}</Text>
        <FlatList 
        horizontal
        data={results}
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={( {item} )=>{
            return <ResultItem business={item}/>
        }}
        />
    </View>)
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    },
    container: {
        marginBottom: 15
    }
})