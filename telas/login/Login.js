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

export default function Login ({ navigation }) {
  const enter = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Home"}]
    })
  }

  const cadastroNew = () => {
    navigation.navigate("Cadastro")
  }
  return (
    <View style={styles.container}>
      <View sytle = {styles.imagens}>
        <Image  style = {{width: 100, height: 100 , marginTop : 100, }} source={require('../../assets/6381774.png')}/> 
      </View> 

      <View style = {styles.header}>  
        <Text style={styles.title}>LACTATIO</Text>
      </View>
      <View style = {styles.subtitleView}>
        <Text style={styles.subtitle}>O Aplicativo para te guiar</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="email" />
        <TextInput style={styles.input} secureTextEntry placeholder="senha" />
        <TouchableOpacity style={styles.submitButton} onPress={() => enter ()}>
          <Text style={styles.submitButtonText}>ENTRAR</Text>
        </TouchableOpacity>
        <Text style = {styles.cadastrar}>
        Novo aqui? <Text style ={styles.entrar} onPress={() => cadastroNew()}>Cadastrar</Text>
      </Text>
      <Text style ={styles.entrar} onPress={() => enter()} >Continuar sem cadastro</Text>
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

  formContainer:{
    flex: 1, 
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    marginTop: 0, 

  },
  subtitle: {
    fontSize: 15,
    marginBottom: 30, 

    
  },
  subtitleView: {
    marginTop: 30,
    marginBottom: 10,
  },
  input: {
    marginVertical: 10,
    width: 310,
    height: 50,
    borderWidth: 1,
    borderColor: "#BA55D3",
    borderRadius: 10,
    paddingLeft: 10,
  },
  submitButton: {
    marginTop: 20,
    width: 261,
    height: 40, 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#BA55D3",
  },
  submitButtonText: {
    color: "white",
    fontSize: 15,
  },
  entrar : {
    flex: 1, 
    color: '#BA55D3', 
    marginTop: 50,
  },
  cadastrar: {
    marginTop: 20,
  },

});
