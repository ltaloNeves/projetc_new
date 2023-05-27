import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
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

      <View style = {styles.header} >
        <Text>
          Carteira de vacinação
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator = {false}>
        <View style = {styles.vacinas} >
          <View>
            <Image  style = {{width: 40, height: 40 , borderRadius: 20, }} source={require('./assets/Projeto_Mobile/icons/2947753.png')}/>
          </View> 
          <View>
            <Text>Hepatite B</Text>
            <Text>Primeira dose</Text>
            <Text>25/03/2023</Text>
          </View>
        </View>
        <View style = {styles.vacinas} >
          <View>
            <Image  style = {{width: 40, height: 40 , borderRadius: 20, }} source={require('./assets/Projeto_Mobile/icons/2947753.png')}/>
          </View> 
          <View>
            <Text>Hepatite B</Text>
            <Text>Primeira dose</Text>
            <Text>25/03/2023</Text>
          </View>
        </View>
        <View style = {styles.vacinas} >
          <View>
            <Image  style = {{width: 40, height: 40 , borderRadius: 20, }} source={require('./assets/Projeto_Mobile/icons/2947753.png')}/>
          </View> 
          <View>
            <Text>Hepatite B</Text>
            <Text>Primeira dose</Text>
            <Text>25/03/2023</Text>
          </View>
        </View>
        <View style = {styles.vacinas} >
          <View>
            <Image  style = {{width: 40, height: 40 , borderRadius: 20, }} source={require('./assets/Projeto_Mobile/icons/2947753.png')}/>
          </View> 
          <View>
            <Text>Hepatite B</Text>
            <Text>Primeira dose</Text>
            <Text>25/03/2023</Text>
          </View>
        </View>
        <View style = {styles.vacinas} >
          <View>
            <Image  style = {{width: 40, height: 40 , borderRadius: 20, }} source={require('./assets/Projeto_Mobile/icons/2947753.png')}/>
          </View> 
          <View>
            <Text>Hepatite B</Text>
            <Text>Primeira dose</Text>
            <Text>25/03/2023</Text>
          </View>
        </View>
        <View style = {styles.vacinas} >
          <View>
            <Image  style = {{width: 40, height: 40 , borderRadius: 20, }} source={require('./assets/Projeto_Mobile/icons/2947753.png')}/>
          </View> 
          <View>
            <Text>Hepatite B</Text>
            <Text>Primeira dose</Text>
            <Text>25/03/2023</Text>
          </View>
        </View>
        <View style = {styles.vacinas} >
          <View>
            <Image  style = {{width: 40, height: 40 , borderRadius: 20, }} source={require('./assets/Projeto_Mobile/icons/2947753.png')}/>
          </View> 
          <View>
            <Text>Hepatite B</Text>
            <Text>Primeira dose</Text>
            <Text>25/03/2023</Text>
          </View>
        </View>
        <View style = {styles.vacinas} >
          <View>
            <Image  style = {{width: 40, height: 40 , borderRadius: 20, }} source={require('./assets/Projeto_Mobile/icons/2947753.png')}/>
          </View> 
          <View>
            <Text>Hepatite B</Text>
            <Text>Primeira dose</Text>
            <Text>25/03/2023</Text>
          </View>
        </View>


      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    vacinas :{
      backgroundColor: "#BA55D3", 
      width: 300,
      borderRadius: 10,
      marginBottom: 10,
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center', 

    },



  
  
  });
  