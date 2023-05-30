import * as React from 'react';
import { View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Feed from './Feed';
import Pesquisa from './Pesquisa';
import Profile from './Profile';
import Vacinas from './Vacinas';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
  },
  tabBarIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
  },
  tabBarIcon: {
    height: 24,
    width: 24,
  },
  tabBarIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 5,
    width: 40,
    marginTop: 5,
    backgroundColor: '#800080',
    borderRadius: 5,
  },
  botao: {
    backgroundColor: '#BA55D3',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  botao: {
    backgroundColor: '#BA55D3',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 70,
    right: 20,
  },
});


function Menu({navigation}){
  
  return (
    <View style={styles.botao}>
    <TouchableOpacity style={{ padding: 10 }}>
      <Image
        source={require("../../assets/Projeto_Mobile/icons/add_circle_FILL0_wght300_GRAD-25_opsz48.png")}
        style={{ width: 50, height: 50 }}
      />
    </TouchableOpacity>
  </View>
  )

}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#800080',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabBarIconContainer}>
              <Image
              style={{ width: size, height: size }}
              source={require('../../assets/Projeto_Mobile/icons/home_FILL0_wght300_GRAD-25_opsz48.png')}
              />
              {focused && <View style = {styles.tabBarIndicator} /> }

            </View>

          ),
        }}
      />
      <Tab.Screen
        name="Pesquisa"
        component={Pesquisa}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabBarIconContainer}>
              <Image
              style={{ width: size, height: size }}
              source={require('../../assets/Projeto_Mobile/icons/search.png')}
              />
              {focused && <View style = {styles.tabBarIndicator} /> }

            </View>

          ),
        }}
      />
      <Tab.Screen
        name="Vacinas"
        component={Vacinas}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabBarIconContainer}>
              <Image
              style={{ width: size, height: size }}
              source={require('../../assets/Projeto_Mobile/icons/2947753.png')}
              />
              {focused && <View style = {styles.tabBarIndicator} /> }

            </View>

          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabBarIconContainer}>
              <Image
              style={{ width: size, height: size }}
              source={require('../../assets/Projeto_Mobile/icons/settings_FILL0_wght300_GRAD-25_opsz48.png')}
              />
              {focused && <View style = {styles.tabBarIndicator} /> }

            </View>

          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Home( { navigation }) {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
      <Menu />
    </NavigationContainer>

  );
}
