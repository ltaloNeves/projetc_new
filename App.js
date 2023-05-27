import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  Feed from './Feed'
import  Pesquisa from './Pesquisa'
import  Profile from './Profile'
import  Vacinas from './Vacinas'


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false, 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pesquisa"
        component={Pesquisa}
        options={{
          headerShown: false,
          tabBarLabel: 'Pesquisa',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="search-web" color={'BA55D3'} size={size} />
          ),
        }}
      /> 
      <Tab.Screen
        name="Vacinas"
        component={Vacinas}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      /> 
      <Tab.Screen
        name="Configurações"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (

            <MaterialCommunityIcons name="account-settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

