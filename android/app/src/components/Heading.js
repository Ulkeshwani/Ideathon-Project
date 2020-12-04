import React from "react";
import { Text } from "react-native";
import { Header, Left, Icon, View, Body } from "native-base";

export default function Heading({ navigation }) {
  return (
    <View>
      <Header style={{ backgroundColor: "dodgerblue", padding: 10 }}>
        <Left style={{ flexDirection: "row" }}>
          <Icon
            name="menu"
            onPress={() => navigation.toggleDrawer()}
            style={{ right: 110, color: "white" }}
          />
          <Icon
            name="exit"
            style={{ left: 210, color: "white" }}
            onPress={() => navigation.jumpTo("Logout")}
          />
          <Body
            style={{
              flex: 1,
              right: 130,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Welcome
            </Text>
          </Body>
        </Left>
      </Header>
    </View>
  );
}
