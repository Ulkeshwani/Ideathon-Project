import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login_Input from "../components/Login_Input";
import Registration_Input from "../components/Registration_Input";
import DashboardModelNavigator from "./DashboardModelNavigator";

//Main Root Navigation
const RootStack = createStackNavigator();

const LoginModelNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={"Registration"}
          component={Registration_Input}
        />
        <RootStack.Screen name={"Login"} component={Login_Input} />
        <RootStack.Screen
          name={"Dashboard"}
          component={DashboardModelNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default LoginModelNavigation;
