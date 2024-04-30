import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "@pages/Home";
import SongSearch from "@pages/SongSearch";
import CitySearch from "@pages/CitySearch";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options = {{
                        headerShown:false,
                    }}
                />
                <Stack.Screen
                    name="city_search"
                    component={CitySearch}
                    options = {{
                        headerShown:false,
                    }}
                />
                <Stack.Screen
                    name="song_search"
                    component={SongSearch}
                    options={
                        {title: 'What was your favorite song?', 
                        headerShown:false}
                    }
                />

            </Stack.Group>
        </Stack.Navigator>
    );
}

export default MyStack;