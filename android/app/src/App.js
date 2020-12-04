import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import LoginModelNavigation from "./Navigations/LoginModelNavigation";
import DashboardModelNavigator from "./Navigations/DashboardModelNavigator";
import * as firebase from "firebase";
import firebaseconfig from "./config";
import LiveStream from "./components/LiveStream";

firebase.initializeApp(firebaseconfig);

const Drawer = createDrawerNavigator();

//Login Model Navigation
const LoginModel = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLoggedIn: null,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState(() => {
          return (this.state.IsLoggedIn = user);
        });
      }
    });
  }
  render() {
    return; //this.state.IsLoggedIn ? (
    //   <NavigationContainer independent={true}>
    //     <Drawer.Navigator
    //       initialRouteName="Dashboard"
    //       screenOptions={{
    //         headerShown: true,
    //         gestureEnabled: true,
    //         unmountOnBlur: true,
    //       }}
    //     >
    //       <Drawer.Screen name={"Welcome"} component={DashboardModelNavigator} />
    //     </Drawer.Navigator>
    //   </NavigationContainer>
    // ) : (
    //   <>
    //     <NavigationContainer independent={true}>
    //       <LoginModel.Navigator
    //         screenOptions={{
    //           headerShown: false,
    //           headerBackAllowFontScaling: true,
    //           headerTransparent: false,
    //         }}
    //       >
    //         <LoginModel.Screen
    //           name={"Divergent"}
    //           component={LoginModelNavigation}
    //         />
    //       </LoginModel.Navigator>
    //     </NavigationContainer>
    //   </>
    <LiveStream />;
  }
}

export default App;
