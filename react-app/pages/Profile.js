import * as React from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity,Button, Text, Dimensions} from 'react-native';
import ProfileBackground from '@assets/profileBackgroundSample.jpeg';
import ProfileImage from '@assets/profilePictureSample.jpeg';
import StaticBackground from '@assets/staticjpg.png';

const Profile =  () => {
    return(
        <ImageBackground source={StaticBackground} style={styles.page}>
            <View style={styles.header}>
                <ImageBackground source={ProfileBackground} style={styles.profileBackground}/>
                <View style = {styles.profileInfo}>
                    <Image height={100} source={ProfileImage} style={styles.profileImage}/>
                    <Text>asd </Text>
                </View>
            </View>

        </ImageBackground>
    );

} 
export default Profile

const styles = StyleSheet.create({
    page:{
        flex:1,
        width:"100%"
    },
    header:{
        flex:1,
        borderWidth:1
    },
    profileBackground:{
        flex:1,
        width:"100%",
        justifyContent:"center",
        overflow:'hidden',
        resizeMode:"center"

    },
    profileInfo:{
        flex:4,
        borderWidth:1,
        
    },
    profileImage:{
        height:Dimensions.get("window").height/10,
        width:Dimensions.get("window").height/10,
        borderRadius:100,
        position:"absolute",
        top:-50,
        left:25
    }


});