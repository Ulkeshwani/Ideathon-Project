import React, { Component, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import { Container, Header, Left, Icon, Content, Body } from "native-base";
import Heading from "../components/Heading";

class Dashboard_Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      geocode: null,
      errorMessage: "",
    };
  }
  componentDidMount() {
    this.getLocationAsync();
  }
  getLocationAsync = async () => {
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    const { latitude, longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    this.setState({ location: { latitude, longitude } });
    console.log(location.coords);
  };
  getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location);
    this.setState({ geocode });
    console.log(geocode);
  };
  render() {
    return (
      <Container>
        <Heading navigation={this.props.navigation} />
        <Content contentContainerStyle={styles.container}>
          <Text>
            Your Current Location:-
            {this.state.geocode
              ? `${this.state.geocode[0].city}, ${this.state.geocode[0].region}, ${this.state.geocode[0].postalCode}`
              : ""}
          </Text>
          <Text>
            {this.state.geocode ? this.state.geocode[0].street : "Loading..."}
          </Text>
        </Content>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.bubble, styles.button]}
            onPress={() => this.getLocationAsync()}
          >
            <Text style={styles.bottomBarContent}>Refresh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bubble, styles.button]}
            onPress={() => this.props.navigation.navigate("Live Location")}
          >
            <Text style={styles.bottomBarContent}>View Live Loction</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(30 , 144, 255, 0.5);",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
});

export default Dashboard_Screen;
