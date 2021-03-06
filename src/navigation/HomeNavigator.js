import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import Profile from "../screens/Profile";
import RatingForDriver from "../screens/Rating";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import RouteMap from "../screens/RouteMap";
import RewardPage from "../screens/Reward";
import LeaderBoard from "../screens/Leaderboard";
import Evaluation from "../screens/Evaluation";
import HomeMap from "../components/HomeMap";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"HomeScreen"}
    >
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
      <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
      <Stack.Screen name={"SearchResult"} component={SearchResults} />
      <Stack.Screen name={"RouteMap"} component={RouteMap} />
      <Stack.Screen name={"Rating"} component={RatingForDriver} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
