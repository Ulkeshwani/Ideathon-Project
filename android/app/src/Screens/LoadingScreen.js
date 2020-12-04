import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const LoadingScreen = (props) => {
  return (
    <View style={styles.Loading}>
      <ActivityIndicator size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  Loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;
