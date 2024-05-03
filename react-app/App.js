import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CitySearch from "@pages/CitySearch";
import Home from "@pages/Home";
import SongSearch from "@pages/SongSearch";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();
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
          name="TabNavigation"
          component={TabNavigation}
          options = {{
            headerShown:false

          }
          }
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

function TabNavigation(){
  return(
    <Tab.Navigator>
      <Tab.Screen
            name="song_search"
            component={SongSearch}
            options={{
              title: 'What was your favorite song?', 
              tabBarLabel:"Song Search",
              headerShown:false}
            }
      />

      <Tab.Screen
        name="city_search"
        component={CitySearch}
        options = {{
            headerShown:false,
            tabBarLabel:"City Search",
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options = {{
            headerShown:false,
            tabBarLabel:"Profile",
        }}
      />

      </Tab.Navigator>
  )
}