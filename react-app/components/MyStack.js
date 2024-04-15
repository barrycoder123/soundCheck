import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "@pages/Home";
import SongSearch from "@pages/SongSearch";

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
                    name="song_search"
                    component={SongSearch}
                    options={{title: 'What was your favorite song?'}}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default MyStack;