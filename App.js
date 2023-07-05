import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./Screens/HomeScreen";
import CatScreen from "./Screens/CatScreen";
import DogScreen from "./Screens/DogScreen";
import BirdScreen from "./Screens/BirdScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CatScreen" component={CatScreen} />
        <Stack.Screen name="DogScreen" component={DogScreen} />
        <Stack.Screen name="BirdScreen" component={BirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
