import React from "react";
import { StyleSheet, View } from "react-native";

import router from "./utils/router";
import { createAppContainer } from "react-navigation";
const AppContainer = createAppContainer(router);

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C97373",
    alignItems: "center",
    justifyContent: "center"
  }
});