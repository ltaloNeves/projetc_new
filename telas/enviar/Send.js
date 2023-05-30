import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import 'react-native-gesture-handler';

export default function Send ({ navigation }) {

  const close = () => {
    navigation.reset = () => ({
      index: 0,
      routes: [{name: "Home"}]
    })
  }

  const tweet = () => {
    navigation.reset = () => ({
      index: 0,
      routes: [{name: "Home"}]
    })
  }

  return (
    <View style={styles.container}>
      <Text>Oi</Text>
      <View style ={styles.header} >
        <View style ={{justifyContent: 'center', alignItems: 'center', height: 50, width: 50,}}>
        <TouchableOpacity style={styles.close} onPress={() => close ()}>
              <Text style={styles.submitButtonText}>X</Text>
        </TouchableOpacity>
          
        </View>
        <View>
        <TouchableOpacity style={styles.submitButton} onPress={() => tweet ()}>
              <Text style={styles.submitButtonText}>Publicar</Text>
        </TouchableOpacity>
          
        </View>

      </View>

      <View style={styles.tweet}>
        <View>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={require("../../assets/Projeto_Mobile/avatar/perfil.png")}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.submitButtonTwo} onPress={tweet}> 
            <Text style={styles.submitButtonText}>Pensamento</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View>
        <TextInput style={styles.inputPrime} secureTextEntry placeholder="O que voce esta pensando?" />
      </View>
      <View>
        <TextInput style={styles.input} secureTextEntry  />
      </View>


      <View
      style={{flexDirection: "row", justifyContent: "space-between", width: 350, marginTop: 15,}}>

                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../../assets/Projeto_Mobile/icons/image_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../../assets/Projeto_Mobile/icons/description_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../../assets/Projeto_Mobile/icons/movie_FILL0_wght300_GRAD-25_opsz48.png")}
                />
            </View>

    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  close: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: "center",

  },
  header: {
    justifyContent: 'space-between',
    marginTop: 20,
    borderColor: 'red',
    width: 350 ,
    height: 50,
    flexDirection: 'row',

    alignItems: 'center',

  },
  tweet: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: 350 ,
    height: 40,
  },
  
  input: {
    width: 350,
    height: 500,

  },
  submitButton: {
    width: 117,
    height: 30, 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#BA55D3",
  },
  submitButtonTwo: {
    width: 117,
    height: 30, 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: 'transparent',
    marginLeft: 10,
  },
  inputPrime: {
    marginTop: 5,
    marginLeft: 95,
    width: 300,

  },

});
