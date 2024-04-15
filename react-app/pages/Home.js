/**
* @file Login.js
* @description Login page for SoundCheck
* @author Ben Skinner
* @todo The background image is not loading fast enough, I'm sure there's a way
*           to optimize the load speed 
*/

import { StyleSheet, View, ImageBackground, Image, TouchableOpacity,Button, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BG from '@assets/login-bg.png';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react'
import GS from '../styles/GlobalStyle';

const Home = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={BG} style={GS.homeBG}>
            <Image source={require('@assets/logo.png')} style={GS.homeLogo}/>
            <View style={GS.homeTextArea}>
                <Text style={GS.homeTextHeader}>
                    Welcome to SoundCheck.
                </Text>
                <Text style={GS.homeTextBody}>
                        Testing, testing — is this thing on?
                </Text>
            </View>
            <TouchableOpacity style={GS.homeLoginButton}>
                <FontAwesome name="spotify" size={34} color="white"/>       
                <Text style={GS.homeLoginButtonText}>
                    Login with Spotify
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}
export default Home;