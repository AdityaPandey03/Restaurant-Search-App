import React,{ useState } from 'react';
import { View, Text,StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList'

const SearchScreen = () => {

    const [ term, setTerm]=useState('');

    const [searchApi , results , error]=useResults();

    const filterResultsByPrice = (price) =>{
        return results.filter(result =>{
            return results.price==price;
        })

    }
  

    return ( 
        <View style={{ flex: 1 }}>
        <SearchBar 
        term={term}
        onTermChange={newTerm => setterm(newTerm)}
        ontermSubmit={()=>searchApi(term)} />

        {error ? <Text>{error}</Text> : null}
        <ScrollView>
        <ResultsList results={filterResultsByPrice('$')}  title="Cost Effective"/>
        <ResultsList results={filterResultsByPrice('$$')} title="it Costlier"/> 
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
        </ScrollView>
        
      
        </View>
    )
};

const styles = StyleSheet.create({})

export default SearchScreen;