import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Pesquisa() {
  return (
    <View style={{ flex: 1, alignItems: "center", }}>
      <View style={styles.imagensHead}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          source={require("../../assets/Projeto_Mobile/avatar/perfil.png")}
        />
        <TextInput style={styles.input} placeholder="pesquisa" />
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../../assets/6381774.png")}
        />
      </View>

      <TouchableOpacity style={styles.botao}>
        <Image
          source={require('../../assets/Projeto_Mobile/icons/add_circle_FILL0_wght300_GRAD-25_opsz48.png')}
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    width: 230,
    height: 30,
    borderWidth: 1,
    borderColor: "#BA55D3",
    borderRadius: 20,
    paddingLeft: 10,
  },
  imagensHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'space-between',
    width: '90%', 
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
});
