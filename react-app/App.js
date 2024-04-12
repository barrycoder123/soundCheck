import ThemeProvider from '@theme';
import Login from '@pages/Login';

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from '@components/MyStack';

export default function App() {

  return (
    <NavigationContainer>
    <ThemeProvider>
      <MyStack/>
    </ThemeProvider>
  </NavigationContainer>
  );
}

/*return (
  <NavigationContainer>
    <ThemeProvider>
      <myStack/>
    </ThemeProvider>
  </NavigationContainer>
);*/