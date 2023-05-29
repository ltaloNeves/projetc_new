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

export default function Cadastro({ navigation }) {
  const [isLeigoActive, setIsLeigoActive] = useState(true);
  const [isProfissionalActive, setIsProfissionalActive] = useState(false);

  const handleLeigoPress = () => {
    setIsLeigoActive(true);
    setIsProfissionalActive(false);
  };

  const handleProfissionalPress = () => {
    setIsLeigoActive(false);
    setIsProfissionalActive(true);
  };

  const enter = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Home"}]
    })
  }
  const conta = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Login"}] 
    })
  }

  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lactatio</Text>
      <View style={styles.buttonsContainer}>     
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isLeigoActive ? '#BA55D3' : '#D9D9D9' },
          isLeigoActive && styles.activeButton
        ]}
        onPress={handleLeigoPress}
        disabled={isLeigoActive}
      >
        <Text style={styles.buttonText}>Usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isProfissionalActive ? '#BA55D3' : '#D9D9D9' },  
          isProfissionalActive && styles.activeButton
        ]}
        onPress={handleProfissionalPress}
        disabled={isProfissionalActive}
      >
        <Text style={styles.buttonText}>Profissional</Text>
      </TouchableOpacity>
    </View>

      {isLeigoActive && (
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="email" />
          <TextInput style={styles.input} secureTextEntry placeholder="senha" />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="confirmar senha"
          />
          <TouchableOpacity style={styles.submitButton} onPress={() => enter ()}>
            <Text style={styles.submitButtonText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      )}

      {isProfissionalActive && (
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="CRM" />
          <TextInput style={styles.input} placeholder="email" />
          <TextInput style={styles.input} secureTextEntry placeholder="senha" />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="confirmar senha"
          />
          <TouchableOpacity style={styles.submitButton} onPress={() => enter ()}>
            <Text style={styles.submitButtonText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.loginText}>
        Já possui uma conta? <Text style ={styles.entrar} onPress={() => conta()}>Entrar</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  entrar: {
    color: '#BA55D3', 
  },
  title: {
    fontSize: 40,
    marginTop: 0, 
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: '#D9D9D9',
    height: 40,
    width: 310, 
    borderRadius: 10, 

  },
  button: {
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 155,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  activeButton: {
  },
  formContainer: {
    marginTop: 20,
    alignItems: "center",
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
    marginTop: 30,
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
  loginText: {
    marginTop: 20,
  },
});
