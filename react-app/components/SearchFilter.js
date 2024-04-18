import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

const Item = ({ song_name, artist_name }) => {
    return (
        <View style = {styles.item}>
            <Text style={styles.song_name}>
                {song_name}
            </Text>
            <Text style={styles.artist_name}>
                {artist_name}
            </Text>
        </View>
    );
};

// can search song name or artist name to select data
const Filter = ( { searchPhrase, setClicked, data }) => {

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
        <SafeAreaView style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    item: {
        margin: 30,
        borderBottomWidth: 2,
        backgroundColor: 'black'

    },
    song_name: {
        color: 'white',
        marginBottom: 5,

    },
    artist_name: {
        color: 'white'

    }
});