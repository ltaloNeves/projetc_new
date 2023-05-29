    justifyContent: "space-between",

   favorite_FILL0_wght300_GRAD-25_opsz48.png

   mode_comment_FILL0_wght300_GRAD-25_opsz48.png

   bookmarks_FILL0_wght300_GRAD-25_opsz48.png
   assets\Projeto_Mobile\icons\ios_share_FILL0_wght300_GRAD-25_opsz48.png


<MaterialCommunityIcons name="home" color={color} size={size} />
            <MaterialCommunityIcons name="magnify" color={'BA55D3'} size={size} />

   <MaterialCommunityIcons name="book" color={color} size={size} />

   <MaterialCommunityIcons name="cog-outline" color={color} size={size} />



settings_FILL0_wght300_GRAD-25_opsz48.png

home_FILL0_wght300_GRAD-25_opsz48.png

search_FILL0_wght400_GRAD0_opsz48 (1).png




import * as React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
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
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabBarIconContainer}>
            <MaterialCommunityIcons
              name="home"
              size={24}
              color={focused ? '#800080' : '#000000'}
              style={styles.tabBarIcon}
            />
            {focused && <View style={styles.tabBarIndicator} />} {/* Exibe a barra roxa quando o botão está ativo */}
          </View> 
          )
        }}
      />
      <Tab.Screen
        name="Pesquisa"
        component={Pesquisa}
        options={{
          headerShown: false,
          tabBarLabel: 'Pesquisa',
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
              style={{ width: size, height: size }}
              source={ require ('./assets/Projeto_Mobile/icons/search.png') }
              />
            )
          }
        }}
      /> 
      <Tab.Screen
        name="Vacinas"
        component={Vacinas}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
              style={{ width: size, height: size }}
              source={ require ('./assets/Projeto_Mobile/icons/2947753.png') }
              />
            )
          }
        }}
      /> 
      <Tab.Screen
        name="Configurações"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
              style={{ width: size, height: size }}
              source={ require ('./assets/Projeto_Mobile/icons/settings_FILL0_wght300_GRAD-25_opsz48.png') }
              />
            )
          },
        }}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0.5,
    borderTopColor: '#800080',
  },
  tabBarLabel: {
    fontSize: 12,
  },
  tabBarIcon: {
    height: 24,
    width: 24,
  },
  tabBarIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: 24,
    backgroundColor: '#800080',
  },
})

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

