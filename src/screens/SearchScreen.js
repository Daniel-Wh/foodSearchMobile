import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {SearchBar} from '../components/SearchBar'
import yelp from '../api/yelp'



export const SearchScreen = ({ navigation })=>{
    const [term, setTerm] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [results, setResults] = useState([])

    const searchApi = async ()=>{
        try {
            const response = await yelp.get('/search', {params: {
                limit: 50,
                term,
                location: 'austin'
    
            }})
            setResults(response.data.businesses)

        } catch (err){
            setErrorMessage('Something went wrong')
        }
        
    }

    return (<View>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={searchApi}
        />
        <Text>
            Search Screen
        </Text>
        <Text>We have found {results.length} results</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>)
}


const styles = StyleSheet.create({

})

