import React from "react";
import { Textarea, Container, Content } from "native-base";
import { StyleSheet, View, Text } from "react-native";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Text>This Is Your Profile</Text>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Profile;
