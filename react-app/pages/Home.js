/**
* @file Login.js
* @description Login page for SoundCheck
* @author Ben Skinner
* @todo The background image is not loading fast enough, I'm sure there's a way
*           to optimize the load speed 
*/

import { StyleSheet, View, ImageBackground, Image, TouchableOpacity,Button, Text, Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BG from '@assets/login-bg.png';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react'
import GS from '../styles/GlobalStyle';

const Home = () => {
    const navigation = useNavigation();
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
            <TouchableOpacity style={styles.homeLoginButton}>
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