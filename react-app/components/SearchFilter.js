import React from "react";
import { useContext } from 'react';
import SCText from '@components/SCText';

import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { ThemeContext } from '@theme';

const Item = ({ song_name, artist_name }) => {
    const theme = useContext(ThemeContext);
    return (
        <View style = {styles(theme).item}>
            <SCText style={styles(theme).song_name}>
                {song_name}
            </SCText>
            <SCText style={styles(theme).artist_name}>
                {artist_name}
            </SCText>
        </View>
    );
};
// can search song name or artist name to select data
const Filter = ( { searchPhrase, setClicked, data }) => {
    const theme = useContext(ThemeContext);
    const renderItem = ( { item }) => {
        // show songs when no search bar data inputted
        // TODO: the songs shown would be from the artist the user went to see
        if (searchPhrase === "") {
            return <Item 
                    song_name={item.song_name} 
                    artist_name={item.artist_name}
                    />
        }
        // song name filter
        // j convert everything to uppercase remove blank spaces 
        if (item.song_name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item 
                        song_name={item.song_name} 
                        artist_name={item.artist_name} 
                    />
        }
        // artist name filter
        if (item.artist_name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item 
                        song_name={item.song_name} 
                        artist_name={item.artist_name} 
                    />
        }
    };
    return (
        <SafeAreaView style={styles(theme).container}>
            <View
                // close the search bar keyboard if not using it
                onStartShouldSetResponder = { () => {
                    setClicked(false);
                }}
            >
                <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};
export default Filter;

const styles = theme => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    item: {
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.quadernary,
        backgroundColor: theme.colors.background
    },
    song_name: {
        m : theme.textVariants.m,
        marginBottom: 5,
        color: theme.colors.primary
    },
    artist_name: {
        s : theme.textVariants.s,
        color: theme.colors.primary
    }
});