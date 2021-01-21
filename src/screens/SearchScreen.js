import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {SearchBar} from '../components/SearchBar'


export const SearchScreen = ({ navigation })=>{
    const [term, setTerm] = useState('')
    return (<View>
        <SearchBar 
        term={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={(term)=> {console.log(`${term} was submitted`)}}
        />
        <Text>
            Search Screen
        </Text>
    </View>)
}


const styles = StyleSheet.create({

})

