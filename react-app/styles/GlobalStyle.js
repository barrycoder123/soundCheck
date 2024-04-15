import { createContext } from "react";
import {StyleSheet, Dimensions} from "react-native";

const GlobalStyle = StyleSheet.create({
    //Home
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
});
export default GlobalStyle;