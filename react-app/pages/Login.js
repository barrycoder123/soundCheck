/**
* @file Login.js
* @description Login page for SoundCheck
* @author Ben Skinner
* @todo The background image is not loading fast enough, I'm sure there's a way
*           to optimize the load speed 
*/

import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import SCText from '@components/SCText';
import BG from '@assets/login-bg.png';
import { ThemeContext } from '@theme';
import { useNavigation } from '@react-navigation/native';

import React from 'react'
import {Button, Text} from 'react-native';

export default function Login() {

    const theme = useContext(ThemeContext)

    // navigating to the song search page
    const navigation = useNavigation();

  return (
    <ImageBackground 
        source={BG}
        style={styles(theme).container}>
        <Image
            source={require('@assets/logo.png')}
            style={styles(theme).logo}
        />
        <View style={styles(theme).mainContent}>
            <SCText size='xl'>
                Welcome to SoundCheck
            </SCText>
            <SCText 
                style={styles(theme).subtitle}
                size='l'>
                    Testing, testing — is this thing on?
            </SCText>
        </View>
        <TouchableOpacity style={styles(theme).button}>
            <FontAwesome name="spotify" size={34} color={theme.colors.primary} />       
            <SCText 
                style={styles(theme).buttonText} 
                size='m'
                strong
                >
                Login with Spotify
            </SCText>
        </TouchableOpacity>
        <Button 
            title="songSearch"
            onPress={() => 
                navigation.navigate("song_search")
            } 
        />
    </ImageBackground>
  );
}

const styles = theme => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    /**
    * @todo Tbh I'm not sure if this works, but I'm trying to make the main content
    * be about 2/3 of the way down the screen, and the button be at the bottom.
    * It works at least on this screen size (iPhone 14) but may need to be adjusted
    */
    mainContent: {
        width: '80%',
        flex: 2/3,
        justifyContent: 'flex-start'
    },
    subtitle: {
        marginTop: theme.spacing.m
    },
    logo: {
        top: 95,
        left: 52,
        position:'absolute',
        height: 70,
        width: 70
    },
    button: {
        width: 326,
        height: 55,
        backgroundColor: theme.colors.spotify,
        borderRadius: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 150,
    },
    buttonText: {
        paddingLeft: theme.spacing.m,
        textTransform: 'uppercase',
    }
});    