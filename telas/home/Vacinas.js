import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import 'react-native-gesture-handler';


const HorizontalLine = () => {
  return <View style={styles.line} />;
};

export default function Vacinas({navigation}) { 

  const tweet = () => {
    navigation.navigate("Send")
  }
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.imagensHead}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          source={require("../../assets/Projeto_Mobile/avatar/perfil.png")}
        />
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../../assets/6381774.png")}
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.head}>Carteira de vacinação</Text>
        <HorizontalLine />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.scrollViewContainer}>
          <View style={styles.vacinas}>
            <View>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("../../assets/Projeto_Mobile/icons/2947753.png")}
              />
            </View>
            <View style={styles.text}>
              <Text>BCG ID ✅ </Text>
              <Text>Primeira dose</Text>
              <Text>23/03/2023</Text>
            </View>
          </View>
          <View style={styles.vacinas}>
            <View>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("../../assets/Projeto_Mobile/icons/2947753.png")}
              />
            </View>
            <View style={styles.text}>
              <Text>Hepatite B ✅</Text>
              <Text>Primeira dose</Text>
              <Text>23/03/2023</Text>
            </View>
          </View>
          <View style={styles.vacinas}>
            <View>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("../../assets/Projeto_Mobile/icons/2947753.png")}
              />
            </View>
            <View style={styles.text}>
              <Text>Hepatite B ✅</Text>
              <Text>Segunda dose</Text>
              <Text>23/04/2023</Text>
            </View>
          </View>
          <View style={styles.vacinasNot}>
            <View>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("../../assets/Projeto_Mobile/icons/2947753.png")}
              />
            </View>
            <View style={styles.text}>
              <Text>Tríplice Bacteriana ❌</Text>
              <Text>Primeira dose</Text>
              <Text>23/05/2023</Text>
            </View>
          </View>
          <View style={styles.vacinasNot}>
            <View>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("../../assets/Projeto_Mobile/icons/2947753.png")}
              />
            </View>
            <View style={styles.text}>
              <Text>Heófolios Tipo B ❌</Text>
              <Text>Primeira dose</Text>
              <Text>23/05/2023</Text>
            </View>
          </View>
          <View style={styles.vacinasNot}>
            <View>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("../../assets/Projeto_Mobile/icons/2947753.png")}
              />
            </View>
            <View style={styles.text}>
              <Text>Poliomelite ❌</Text>
              <Text>Primeira dose</Text>
              <Text>25/05/2023</Text>
            </View>
          </View>
          <View style={styles.vacinasNot}>
            <View>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("../../assets/Projeto_Mobile/icons/2947753.png")}
              />
            </View>
            <View style={styles.text}>
              <Text>Rotavirus ❌</Text>
              <Text>Primeira dose</Text>
              <Text>26/05/2023</Text>
            </View>
          </View>
          <View style={styles.vacinasNot}>
            <View>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("../../assets/Projeto_Mobile/icons/2947753.png")}
              />
            </View>
            <View style={styles.text}>
              <Text>Antipneumocócia</Text>
              <Text>Conjugada Heptavalente ❌</Text>
              <Text>Primeira dose</Text>
              <Text>27/05/2023</Text>
            </View>
          </View>
          <View style={styles.vacinasNot}>
            <View>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("../../assets/Projeto_Mobile/icons/2947753.png")}
              />
            </View>
            <View style={styles.text}>
              <Text>Antimeningocócia C Conjugada ❌</Text>
              <Text>Primeira dose</Text>
              <Text>28/06/2023</Text>
            </View>
          </View>
          <View style={styles.vacinasNot}>
            <View>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("../../assets/Projeto_Mobile/icons/2947753.png")}
              />
            </View>
            <View style={styles.text}>
              <Text>Influenza ❌</Text>
              <Text>Primeira dose</Text>
              <Text>23/06/2023</Text>
            </View>
          </View>
          <View style={styles.vacinasNot}></View>
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
  scrollViewContent: {
    width: "100%",
  },
  scrollViewContainer: {
    flex: 1,
    width: "100%",
    height: "70%",
  },
  botao: {
    backgroundColor: "#BA55D3",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 100,
    right: 20,
    zIndex: 1,
  },

  imagensHead: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    justifyContent: "space-between",
    width: "90%",
  },
  head: {
    marginTop: 10,
    fontSize: 25,
  },
  text: {
    width: 200,
  },
  vacinas: {
    backgroundColor: "rgba(192, 192, 192, 0.4)",
    width: 330,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  vacinasNot: {
    backgroundColor: "rgba(192, 192, 192, 0.4)",
    width: 330,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    opacity: 0.3,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 20,
    marginBottom: 20,
  },
});
