import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';


export const SearchBar = ({ term, onTermChange, onTermSubmit})=>{
    return (<View style={styles.background}>
        <Feather name="search" size={30} color="black" />
        <TextInput style={styles.input}
        placeholder="Search"
        autoCorrect={false}
        autoCapitalize='none'
        value={term}
        onEndEditing={()=> {onTermSubmit(term)}}
        onChangeText={newTerm => onTermChange(newTerm)}
        />
    </View>)
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#D8D3D3',
        height: 50,
        borderRadius: 5, 
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    input: {
        flex: 1,
        height: 38,
        fontSize: 24,

    }
})

