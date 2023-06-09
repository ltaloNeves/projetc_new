import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
} from "@react-navigation/native";
import Login from "./telas/login/Login";
import Cadastro from "./telas/cadastro/Cadastro.js";
import Home from "./telas/home/Home.js";
import Send from "./telas/enviar/Send.js";
const Stack = createStackNavigator();
import 'react-native-gesture-handler';



function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Send" component={Send} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer
    screenOptions={{
      headerBackTitleVisible: false}}
    >
      <MyStack />
    </NavigationContainer>
  );
}
