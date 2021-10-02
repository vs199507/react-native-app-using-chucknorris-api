/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Jokes from './screens/Jokes';


const Stack = createStackNavigator();

const App = ({navigation,route}) => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle:{
            backgroundColor:"#1C8D73",
          },
          title:"Jokes App",
          headerTitleStyle:{
            color:"#B9345A", 
            textAlign: "center",
          },
        }}
        >

        </Stack.Screen>
        <Stack.Screen
        name="Jokes"
        component={Jokes}
        options={{
          headerStyle:{
            backgroundColor:"#1C8D73",
          },
          title:"Jokes App",
          headerTitleStyle:{
            color:"#B9345A", 
            textAlign: "center",
          },
        }}
        >

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
