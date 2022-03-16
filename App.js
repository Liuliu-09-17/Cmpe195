/**
Senior Project -- IoT System
@author: Yang Liu
 */

import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Home from './screen/Home';
import RealData from './screen/Realdata';
import SimulData from './screen/SimulData';
import EditSensor from './screen/EditSensor';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'IoT System',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />

          <Stack.Screen name="RealData" component={RealData}
            options={{
              title: 'Real Data',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />

          <Stack.Screen name="EditSensor" component={EditSensor}
            options={{
              title: 'Edit Sensor',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />

          <Stack.Screen name="SimulData" component={SimulData}
            options={{
              title: 'Simulate Data',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />




        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}