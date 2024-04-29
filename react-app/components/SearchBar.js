import React from "react";
import { StyleSheet, TextInput, SafeAreaView, View} from "react-native";
import { FontAwesome} from '@expo/vector-icons';

/**
* @param {boolean} clicked t or f (defaults -> f)
* @param {string} searchPhrase - search bar text state 
* @param {string} setSearchPhrase - function to update the state used for hook in songSearch page
*/

const SearchBar = ({searchPhrase, setSearchPhrase, placeHolder}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.iconContainer}>
                <FontAwesome name="search" style={styles.logo}/>
            </View>
            <View style={styles.textContainer}>
                <TextInput  
                    style={styles.input}
                    placeholder={placeHolder}
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                />
            </View>
        </SafeAreaView>
    );
};
export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf:"center",
        height:35,
        top:10,
        width: "90%",
        backgroundColor: 'darkgrey',
        borderRadius: 5,
    },
    input: {
        flex:1,
        color: 'gray',
        flexDirection: "row",
    },
    textContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
    },
    iconContainer:{
        justifyContent:"center",
        paddingLeft:10,
        paddingRight:10
    },
    logo: {
        color:"white",
        fontSize:20,
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