import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import react from 'react';
import Home from '../manhinh/Home';


const Stack = createNativeStackNavigator();

export default function Route() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      );
 }