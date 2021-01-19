import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LearnOptionsScreen from '../screens/LearnOptionsScreen';
import LearningScreen from '../screens/LearningScreen';
import GreatjobScreen from '../screens/GreatJobScreen';

export default function stackNavigator() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="LearnOptionsScreen"
          component={LearnOptionsScreen}
        />
        <Stack.Screen name="LearningScreen" component={LearningScreen} />
        <Stack.Screen name="GreatjobScreen" component={GreatjobScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
