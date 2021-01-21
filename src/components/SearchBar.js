import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';


export const SearchBar = ()=>{
    return (<View style={styles.background}>
        <Feather name="search" size={30} color="black" />
        <TextInput style={styles.input}
        placeholder="Search"
        autoCorrect={false}
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

