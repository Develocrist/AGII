import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{ WelcomeScreen } from '../screens/Welcome';
import { ScreenHome } from '../screens/Home';
import { ModelScreen } from '../screens/Models';
import { ModeloMenu } from '../screens/MenuModel';
import { InfoModelo } from '../screens/InfoModel';


const Stack = createNativeStackNavigator();

export const Navegacion = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} /> 
        <Stack.Screen name="Home" component={ScreenHome} options={{headerShown:false}}/>
        <Stack.Screen name="Models" component={ModelScreen} options={{headerShown:false}}/>
        <Stack.Screen name="MenuModelo" component={ModeloMenu} options={{headerShown:false}}/>
        <Stack.Screen name="Info" component={InfoModelo} options={{headerShown:false}}/> 
           
      </Stack.Navigator>
    </NavigationContainer>
  );
}
