/**
* @file SongSearch.js
* @description song search page for SoundCheck using spotify api and search bar
* @author Ibrahima Barry
* @todo have the user preview (i.e listen to a portion) of songs
*/

import { StyleSheet, FlatList, Text, View, SafeAreaView, ActivityIndicator, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useContext, useState, useEffect } from 'react';


import SCText from '@components/SCText';
import SearchBar from '@components/SearchBar';
import Filter from '@components/SearchFilter';
import Header from '@assets/songSearchHeader.png';

import BG from '@assets/staticjpg.png';
import spotify from '@assets/spotifyIcon.png';
import { ThemeContext } from '@theme';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'
import { discovery } from 'expo-auth-session/build/providers/Google';

const getSpotifyCredentials = async () => {
  const res = await axios.get('/pages/SongSearch')
  const spotifyCredentials = res.data
  return spotifyCredentials
}

/* user-read-private scope gives us access to the search for item endpoint which 
allows us to search for tracks and artists
the ugc-image-upload scope allows us to add playlist images for albums when we search a song

*/
const myScopes = ['ugc-image-upload', 'user-read-private']; 
const Item = ({ song_name, artist_name }) => {
    const theme = useContext(ThemeContext);
    return (
        <View style = {styles(theme).item}>
            <View style={styles(theme).album_cov}>
                {/*the image go here*/}
                <Image source={require('@assets/orion.png')} style={styles(theme).album} />
            </View>
            <View style={styles(theme).song_details}>
                {/*song name album stuff*/}
                <View style={styles(theme).song_name_container}>
                    <SCText style={styles(theme).song_name}>
                        {song_name}
                    </SCText> 
                    <Ionicons name="ellipsis-vertical" size={24} color="white" />
                </View>    
                <SCText style={styles(theme).artist_name}>
                    {artist_name}
                </SCText>
            </View>
           {/* <Image source={require('@assets/spotifyIcon.png')} style={styles(theme).spotify_icon} /> */}
  

        </View>
    );
};

const SongSearch = () => {

    const theme = useContext(ThemeContext);
    // see included components
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [OrionSun, setOrionSun] = useState();

    // this is toy data of orion sun songs and one other artist to test searching
    useEffect( () => {
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

    // can search song name or artist name to select data
    const Filter = ( { searchPhrase, setClicked, data }) => {
        const theme = useContext(ThemeContext);
        const renderItem = ( { item }) => {
            // show songs when no search bar data inputted
            // TODO: the songs shown would be from the artist the user went to see
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
            <ImageBackground 
                source={BG}
                style={styles(theme).botcontainer}
            >
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
            </ImageBackground>
        );
    };
  return (
    <ImageBackground 
        source={BG}
        style={styles(theme).container}>
        <ImageBackground 
            source={Header}
            style={styles(theme).subcontainer}>
            <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
            />
        </ImageBackground>
        {!OrionSun ? (
            <ActivityIndicator size="large" />
        ) : (
            <Filter 
                searchPhrase={searchPhrase}
                setClicked={setClicked}
                data={OrionSun}
            />
        )}
    </ImageBackground>
  );
};
export default SongSearch;


const styles = theme => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    subcontainer : {
        flex: 1/3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#2F2F2F',
    },
    botcontainer: {
        flex: 3,
        alignItems: 'stretch',
        backgroundColor: '#111111',
        justifyContent: 'flex-start',
    },
    mainContent: {
        width: '80%',
        flex: 2/3,
        justifyContent: 'flex-start'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 30,
    },
    album_cov: {
        flex: 1,
        marginRight: 5,
    },
    album: {
        width: 60,
        height: 60
    },
    song_details: {
        flexDirection: 'column',
        flex: 5,
    },
    song_name_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    song_name: {
        m : theme.textVariants.m,
        marginBottom: 5,
        color: theme.colors.primary
    },
    artist_name: {
        flex: 1,
        s : theme.textVariants.s,
        color: theme.colors.tertiary
    },
    spotify_icon: {
        width: 20, 
        height: 20, 
        resizeMode: 'contain',
        marginRight: 5 
    }
});    