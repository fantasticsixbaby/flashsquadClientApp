import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RewardPage from "../screens/Reward";
import LeaderBoard from "../screens/Leaderboard";
import Evaluation from "../screens/Evaluation";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const dummyScreen = (props) => {
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <Text>{props.name}</Text>
  </View>;
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{ headerShown: false,}}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Evaluation" component={Evaluation} />
        <Drawer.Screen name="LeaderBoard" component={LeaderBoard} />
        <Drawer.Screen name="Reward" component={RewardPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
