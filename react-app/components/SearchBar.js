import React from "react";
import { StyleSheet, TextInput, SafeAreaView, View, Keyboard, TouchableOpacity } from "react-native";
import { useContext } from 'react';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

/**
* @param {boolean} clicked t or f (defaults -> f)
* @param {string} searchPhrase - search bar text state 
* @param {string} setSearchPhrase - function to update the state used for hook in songSearch page
* @param {boolean} setClicked - sets state of search bar based on clicked boolean
*/
const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={ styles.bar_clicked }>
                { /* getting a search icon from FontAwesome */ }
                <FontAwesome name="search" size={24} color='white'/>
                {/* Input field */}
                <TextInput  
                    style={styles.input}
                    placeholder="What was your favorite song from the set?"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {setClicked(true);}}
                />
                {/*clear text icon; this only shows up after u click the search bar */}
                {clicked && (
                    <Ionicons 
                        name="close-circle-sharp"
                        size={24} 
                        color='white'
                        style={{ padding : 1 }}
                        onPress={() => {setSearchPhrase(" ")} }
                    />
                )}
            </View>
            {/* the x button the left side to cancel the search */}
            {clicked && (
                <View>
                    <TouchableOpacity 
                            
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                        }}    
                    >
                    <MaterialIcons name="clear" size={24} color='white'/>        
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};
export default SearchBar;

const styles = StyleSheet.create({
    container: {
        top: 20,
        //backgroundColor: 'darkgrey',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    input: {
        width: '80%',
        flex: 2/3,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        color: '#EFEFEF',
        flexDirection: "row",
    },
    subtitle: {
  
    },
    logo: {
        top: 95,
        left: 52,
        position:'absolute',
        height: 70,
        width: 70
    },
    bar_clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: '#979797',
        borderRadius: 15,
        alignItems: "flex-start",
        justifyContent: "space-evenly"
    },
    bar_unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "lightgrey", 
        borderRadius: 15,
        alignItems: "center"
    },
    button: {
        width: 55,
        height: 55,
        left: '90%',
        borderRadius: 60,
        display: 'flex',
        flexDirection: 'row',
    }
});