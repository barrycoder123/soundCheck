import React from "react";
import { View, Text } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "@pages/Login";
import SongSearch from "@pages/SongSearch";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen
                    name="Home" // for us login is home
                    component={Login}
                />
                <Stack.Screen
                    name="song_search"
                    component={SongSearch}
                    options={{title: 'What was your favorite song?'}}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default MyStack;