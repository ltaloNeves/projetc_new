import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from './telas/login/Login'
import Cadastro from './telas/cadastro/Cadastro'
import Home from './telas/home/Home'
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
    return (
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      );
}
