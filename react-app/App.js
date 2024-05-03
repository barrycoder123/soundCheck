import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CitySearch from "@pages/CitySearch";
import Home from "@pages/Home";
import SongSearch from "@pages/SongSearch";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}