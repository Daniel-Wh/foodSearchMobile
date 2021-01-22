import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {SearchBar} from '../components/SearchBar'
import useResults from '../hooks/useResults'
import {ResultsList} from '../components/ResultsList'


export const SearchScreen = ({ navigation })=>{
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {return result.price === price})
    }
    return (<View style={{flex: 1}}>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={()=>searchApi(term)}
        />
        <Text>We have found {results.length} results</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
        <ResultsList
        title="Cost Effective"
        results={filterResultsByPrice("$")}
        />
        <ResultsList
        title="Bit Pricier"
        results={filterResultsByPrice("$$")}
        />
        <ResultsList
        title="Big Ballin!"
        results={filterResultsByPrice("$$$")}
        />
        </ScrollView>
        

    </View>)
}


const styles = StyleSheet.create({

})

