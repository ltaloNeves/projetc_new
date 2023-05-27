import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Vacinas() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <View sytle = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image  style = {{width: 40, height: 40 , borderRadius: 20, }} source={require('./assets/Projeto_Mobile/avatar/perfil.png')}/>
        <Image  style = {{width: 40, height: 40 , marginTop : 20, }} source={require('./assets/6381774.png')}/>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },


  
  
  });
  