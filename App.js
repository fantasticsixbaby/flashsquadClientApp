import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Navigator />
    </>
  );
}

export default App

const styles = StyleSheet.create({});
