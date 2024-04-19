/**
* @file SongSearch.js
* @description song search page for SoundCheck using spotify api and search bar
* @author Ibrahima Barry
* @todo have the user preview (i.e listen to a portion) of songs
*/

import { StyleSheet, FlatList, Text, View, SafeAreaView, ActivityIndicator, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import SearchBar from '@components/SearchBar';
import Header from '@assets/songSearchHeader.png';
import bg from '@assets/staticjpg.png';
import spotify from '@assets/spotifyIcon.png';
import { Ionicons } from '@expo/vector-icons';

const SongSearch = () => {
    // see included components
    const [searchPhrase, setSearchPhrase] = useState("");
    //const [clicked, setClicked] = useState(false);
    const [OrionSun, setOrionSun] = useState();

    // this is toy data of orion sun songs and one other artist to test searching
    useEffect(() => {
        const getData = async () => {
            const apiResponse = await fetch (
                "https://my-json-server.typicode.com/barrycoder123/orionSunSongs/songs"
            );
            const data = await apiResponse.json();
            setOrionSun(data);
        };
        getData();
        }, []
    );
    return (
    <>
        <ImageBackground source={Header} style={styles.searchBar}>
            <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            //clicked={clicked}
            //setClicked={setClicked}
            />
        </ImageBackground>
        {
            <Filter 
                searchPhrase={searchPhrase}
                data={OrionSun}
            />
        }
    </>
  );
};
export default SongSearch;

//
const Filter = ( { searchPhrase, data }) => {
    const renderItem = ( { item }) => {
        // the songs shown would be from the artist the user went to see
        if (searchPhrase === "") {
            return(null);
        }
        // song name filter
        // j convert everything to uppercase remove blank spaces 
        else if (item.song_name.toUpperCase().includes(searchPhrase.toUpperCase().trim())) {
            return <Item 
                        song_name={item.song_name} 
                        artist_name={item.artist_name} 
                    />
        }
        // artist name filter
        else if (item.artist_name.toUpperCase().includes(searchPhrase.toUpperCase().trim())) {
            return <Item 
                        song_name={item.song_name} 
                        artist_name={item.artist_name} 
                    />
        }
    };
    return (
        <ImageBackground source={bg} style={styles.results}>
            <View
                // // close the search bar keyboard if not using it
                // onStartShouldSetResponder = { () => {
                //     setClicked(false);
                // }}
            >
                <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </ImageBackground>
    );
};


/* user-read-private scope gives us access to the search for item endpoint which 
allows us to search for tracks and artists
the ugc-image-upload scope allows us to add playlist images for albums when we search a song
*/

const myScopes = ['ugc-image-upload', 'user-read-private']; 
const Item = ({ song_name, artist_name }) => {
    return (
        <View style = {styles.item}>
            <View style={styles.album_cov}>
                <Image source={require('@assets/orion.png')} style={styles.album} />
            </View>
            <View style={styles.song_details}>
                <View style={styles.song_name_container}>
                    <Text style={styles.song_name}>
                        {song_name}
                    </Text> 
                    <Ionicons name="ellipsis-vertical" size={24} color="white" />
                </View>    
                <Text style={styles.artist_name}>
                    {artist_name}
                </Text>
            </View>
           {/* <Image source={require('@assets/spotifyIcon.png')} style={styles(theme).spotify_icon} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar : {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2F2F2F',
    },
    results: {
        flex: 9,
        alignItems: 'stretch',
        backgroundColor: '#111111',

    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 30,
    },
    album_cov: {
        flex: 1,
        marginRight: 5
    },
    album: {
        width: 60,
        height: 60
    },
    song_details: {
        flexDirection: 'column',
        flex: 5
    },
    song_name_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    song_name: {
        color: "#EFEFEF",
        lineHeight: 43.5,
        marginBottom: 5
    },
    artist_name: {
        flex: 1,
        lineHeight: 43.5,
        color: '#696969'
    },
    spotify_icon: {
        width: 20, 
        height: 20, 
        resizeMode: 'contain',
        marginRight: 5 
    }
});    