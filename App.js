import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
} from "@react-navigation/native";
import Login from "./telas/login/Login";
import Cadastro from "./telas/cadastro/Cadastro.js";
import Home from "./telas/home/Home.js";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
