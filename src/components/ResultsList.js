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
        renderItem={( {item} )=>{
            return <ResultItem business={item}/>
        }}
        />
    </View>)
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        margin: 10
    }
})