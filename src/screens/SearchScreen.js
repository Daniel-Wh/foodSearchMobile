import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {SearchBar} from '../components/SearchBar'


export const SearchScreen = ({ navigation })=>{
    return (<View>
        <SearchBar/>
        <Text>
            Search Screen
        </Text>
    </View>)
}


const styles = StyleSheet.create({

})

