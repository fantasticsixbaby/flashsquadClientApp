import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Navigator from "./src/navigation/Navigator";
import HomeScreen from "./src/screens/HomeScreen";

import Amplify from "aws-amplify";
import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigator />
    </>
  );
}

const styles = StyleSheet.create({});
