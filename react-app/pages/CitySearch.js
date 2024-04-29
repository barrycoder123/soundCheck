/**
* @file citySearch.js
* @description City Searching paging for where the user is located, use free online API
* @author Ibrahima Barry
* @todo:
    have the user preview (i.e listen to a portion) of songs
    get songs from spotify api
    make search bar icon lower on the screen
*/

import { StyleSheet, FlatList, Text, View, SafeAreaView, ActivityIndicator, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import SearchBar from '@components/SearchBar';
import Header from '@assets/songSearchHeader.png';
import bg from '@assets/staticjpg.png';
import spotify from '@assets/spotifyIcon.png';
import { Ionicons } from '@expo/vector-icons';

const CitySearch = () => {
    // see included components
    const [searchPhrase, setSearchPhrase] = useState("");
    my_placeHolder = "Nearest city name";
    const [cityData, setCityData] = useState();
    // RAPID API: API key and host name
    //'https://andruxnet-world-cities-v1.p.rapidapi.com/?searchby=city'
    const url = `https://andruxnet-world-cities-v1.p.rapidapi.com/?query=${searchPhrase}&searchby=city`;
    //'https://andruxnet-world-cities-v1.p.rapidapi.com/?query=boston&searchby=city';
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'a3204e0653mshb1ddf79d235c3c6p119a1djsnac2f8f0eee13',
          'X-RapidAPI-Host': 'andruxnet-world-cities-v1.p.rapidapi.com'
        }
      };

    // this is toy data of orion sun songs and one other artist to test searching
    useEffect(() => {
        const getData = async () => {
            try{
                const apiResponse = await fetch (url, options);
                const data = await apiResponse.json();
                setCityData(data);
            } catch(error) {
                console.error("Error fetching data:", error);
            }
        };
        if (searchPhrase.trim() !== ''){
            getData();
        } else {
            setCityData([]);
        }
        }, [searchPhrase]
    );
    return (
    <>
        <ImageBackground source={Header} style={styles.searchBar}>
            <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            placeHolder = {my_placeHolder}
            />
        </ImageBackground>
        {
            <Filter 
                searchPhrase={searchPhrase}
                data={cityData}
            />
        }
    </>
  );
};
export default CitySearch;

//
const Filter = ( { searchPhrase, data }) => {
    const renderItem = ( { item }) => {
        if (searchPhrase === "") {
            return(null);
        }
        // city name filter
        // j convert everything to uppercase remove blank spaces 
        else if (item.city.toUpperCase().includes(searchPhrase.toUpperCase().trim())) {
            return <Item 
                        city_name={item.city} 
                        state_name={item.state} 
                    />
        }
        // artist name filter
        else if (item.state.toUpperCase().includes(searchPhrase.toUpperCase().trim())) {
            return <Item 
                        song_name={item.city} 
                        artist_name={item.state} 
                    />
        }
    };
    return (
        <ImageBackground source={bg} style={styles.results}>
            <View>
                <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `${item.city}-${item.state}-${index}`}
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
const Item = ({ city_name, state_name }) => {
    return (
        <View style={styles.item}>
        <View style={styles.city_details}>
          <Text style={styles.city_name}>
            {city_name}, {state_name}
          </Text>
          <Image
            source={require('@assets/redArrow.png')}
            width={19}
            height={14}
            marginLeft={10}
          />
        </View>
        <View style={styles.lineContainer}>
          <Image
            source={require('@assets/Line.png')}
            style={styles.line_image}
            marginTop={20}
            resizeMode="contain"
          />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    searchBar : {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2F2F2F',
        paddingTop: 20 
    },
    results: {
        flex: 9,
        alignItems: 'stretch',
        backgroundColor: '#111111',
        width: "100%",
        height: "100%"

    },
    item: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 30,
        //marginRight: 20
        //paddingBottom: 20
    },
    city_details: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'flex-end'
    },
    city_name: {
        color: "#EFEFEF",
        lineHeight: 19.36,
        fontSize: 16,
        marginBottom: 5,
        flexGrow: 1 // Allow text to take up all available space
    },
    lineContainer: {
        width: '100%', // Ensure the container takes up the full width of its parent
        alignItems: 'center', // Center the image horizontally
      },
      line_image: {
        width: '100%', // Set the width of the image to fill the container
        height: 5, // Adjust the height as needed
        resizeMode: 'contain', // Resize the image to fit within the container
      }
});    