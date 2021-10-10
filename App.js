import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Navigator from "./src/navigation/Navigator";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigator />
    </>
  );
}

const styles = StyleSheet.create({});
