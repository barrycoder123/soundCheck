/**
* @file Login.js
* @description Login page for SoundCheck
* @author Ngawang Rinchen
* @todo The background image is not loading fast enough, I'm sure there's a way
*           to optimize the load speed 
*/

import { StyleSheet, View, ImageBackground, Image, TouchableOpacity,Button, Text, Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BG from '@assets/login-bg.png';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import * as React from 'react';
import { useState, useEffect } from 'react';
import base64 from 'react-native-base64'


// Spot API Endpoint

WebBrowser.maybeCompleteAuthSession();

let authCode = null;

const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const Home = ({navigation}) => {

    const [request, response, promptAsync] = useAuthRequest(
        {
          clientId: '6cd186c8e7224c6ba402b7321d53b384',
          clientSecret: '5c048ee0c2f2420486abcc622d76d820',
          scopes: ['user-read-email', 'playlist-modify-public', 
                   'playlist-modify-private', 'playlist-modify-public',
                   'user-follow-read', 'user-library-read',
                    'user-top-read'],
          usePKCE: false,
          //undefined = use scheme in app.json
          redirectUri: makeRedirectUri({}),
        }, discovery);

    useEffect(() => {
        if (response?.type === 'success') {
            authCode = response.params.code;
            console.log(authCode);
            const options = {
                method: 'POST',
                body: JSON.stringify({
                    code: authCode,
                    redirect_uri: useAuthRequest.redirectUri,
                    grant_type: 'authorization_code'
                }),
                headers: {
                  'Authorization': 'Basic ' + base64.encode(useAuthRequest.clientId + ':' + useAuthRequest.clientSecret),
                  'Content-Type': "application/x-www-form-urlencoded"
                }, 
                json: true
            };
            const getData = async () => {
                try{
                    const apiResponse = await fetch ("https://accounts.spotify.com/api/token", options);
                    const data = await apiResponse.json();
                    console.log("ACCESS TOKEN FROM SPOT", data);
                } catch(error) {
                    console.error("Error fetching data:", error);
                }
            }; 
            getData();
            
            navigation.navigate("TabNavigation",{screen:"song_search"});
          const { code } = response.params;
        }
      }, [response]);
      

    return (
        <ImageBackground source={BG} style={styles.homeBG}>
            <Image source={require('@assets/logo.png')} style={styles.homeLogo}/>
            <View style={styles.homeTextArea}>
                <Text style={styles.homeTextHeader}>
                    Welcome to SoundCheck.
                </Text>
                <Text style={styles.homeTextBody}>
                        Testing, testing — is this thing on?
                </Text>
            </View>
            <TouchableOpacity 
                style={styles.homeLoginButton}
                disabled={!request}
                //title="Login"
                onPress={() => {
                  promptAsync();
                }}
            >
                <FontAwesome name="spotify" size={34} color="white"/>       
                <Text style={styles.homeLoginButtonText}>
                    Login with Spotify
                </Text>
            </TouchableOpacity>
           
        </ImageBackground>
    );
}
export default Home;

const styles = StyleSheet.create({
    homeBG:{
        flex: 1,
        alignItems: 'center',
        width:"100%",
        justifyContent: 'flex-end',
    },
    homeLogo:{
        position:'absolute',
        top: Dimensions.get('window').height/10,
        left: Dimensions.get('window').width/10,
        height: Dimensions.get('window').height/10,
        width: Dimensions.get('window').height/10,
    },
    homeTextArea:{
        width: '80%',
        flex: 2/3,
        justifyContent: 'flex-start',
        
    },
    homeTextHeader:{
        color:"white",
        fontSize:Dimensions.get('window').height/20,
    },
    homeTextBody:{
        margin:10,
        color:"white",
    },
    homeLoginButton:{
        backgroundColor:"#1DB954",
        width: 326,
        height: 55,
        borderRadius: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: Dimensions.get('window').height/20,
    },
    homeLoginButtonText:{
        marginLeft:10,
        textTransform: 'uppercase',
        color: "white",
    }
})