import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard_Screen from "../Screens/Dashboard_Screen";
import Map from "../components/Map";
import E_Complaint from "../Screens/HomeScreen";
import Profile from "../Screens/Profiles";
import Login_Input from "../components/Login_Input";
const Drawer = createDrawerNavigator();

function DashboardModelNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown: true,
          gestureEnabled: true,
          unmountOnBlur: true,
        }}
      >
        <Drawer.Screen name={"Profile"} component={Profile} />
        <Drawer.Screen name={"Dashboard"} component={Dashboard_Screen} />
        <Drawer.Screen name={"Logout"} component={Login_Input} options={{}} />
        <Drawer.Screen name={"Live Location"} component={Map} />
        <Drawer.Screen
          name={"E-Complaint Registration "}
          component={E_Complaint}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default DashboardModelNavigator;
