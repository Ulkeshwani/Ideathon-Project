import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Header, Left, Icon, Content } from "native-base";
import Heading from "../components/Heading";

const E_Complaint = ({ route, navigation }) => {
  return (
    <Container>
      <Heading navigation={navigation} />
      <Content contentContainerStyle={styles.container}>
        <Text>{}</Text>
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default E_Complaint;
