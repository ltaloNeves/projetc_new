import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const HorizontalLine = () => {
  return <View style={styles.line} />;
};

export default function Profile() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.imagensHead}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          source={require("../../assets/Projeto_Mobile/avatar/perfil.png")}
        />
        <Image
          style={{ width: 40, height: 40, }}
          source={require("../../assets/6381774.png")}
        />
      </View>
      <View>
        <HorizontalLine />

      </View>


      <View style = {styles.butttonsBack}>
        <TouchableOpacity style={styles.submitButton}>
         <Text style={styles.submitButtonText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Amigos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Locais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Privacidade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Segurança</Text>
        </TouchableOpacity>
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
    imagensHead: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 40,
      justifyContent: 'space-between',
      width: '90%', 
  
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
    line: {
      borderBottomColor: "black",
      borderBottomWidth: 1,
      marginVertical: 20,
      marginBottom: 20,
    },    

  
  
  });