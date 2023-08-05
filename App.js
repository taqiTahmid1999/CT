import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import EcommercePage from "./components/EcommercePage";

const stack=createNativeStackNavigator();

const app=()=>{
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="RegistrationPage">
      <stack.Screen name="RegistrationPage" component={RegistrationPage}/>
        <stack.Screen name="LoginPage" component={LoginPage}/>
        <stack.Screen name="EcommercePage" component={EcommercePage}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

 export default app;


