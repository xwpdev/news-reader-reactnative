import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TabScreen from "./src/screens/TabScreen";

export default function App() {
  return <TabScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
