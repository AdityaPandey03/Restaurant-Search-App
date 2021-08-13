import React from 'react';
import { View, TextInput,StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return ( 
        <View style={styles.backgroundStyle}>
        <FontAwesome name="search" style={styles.iconStyle}/>
            <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={()=> onTermSubmit()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle : {
        marginTop: 15,
        backgroundColor : '#FOEEE',
        height: 40,
        borderRadius :5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10

    },
    inputStyle: {
        fontSize: 18,
        flex: 1

    },
    iconStyle: {
        fontSize :35,
        alignSelf:'center',
        marginHorizontal: 15
    }
})

export default SearchBar;