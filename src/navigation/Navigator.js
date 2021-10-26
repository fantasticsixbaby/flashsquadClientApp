import React, { Component } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RewardPage from "../screens/Reward";
import LeaderBoard from "../screens/Leaderboard";
import Evaluation from "../screens/Evaluation";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import CustomNavigation from "./CustomNavigation";
import { Auth } from "aws-amplify";

const Drawer = createDrawerNavigator();

const dummyScreen = (props) => {
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <Text>{props.name}</Text>
  </View>;
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }} >
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Account" component={Evaluation} />
        <Drawer.Screen name="LeaderBoard" component={LeaderBoard} />
        <Drawer.Screen name="Reward" component={RewardPage} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Log out">
        {() => <CustomNavigation />}
        </Drawer.Screen>
      </Drawer.Navigator>
        
    </NavigationContainer>
    
  );
};

export default Navigator;

const styles = StyleSheet.create({});
