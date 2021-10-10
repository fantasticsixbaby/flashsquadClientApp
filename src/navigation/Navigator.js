import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import HomeMap from "../components/HomeMap";
import BottomSheet from "../components/BottomSheet/BottomSheet";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
          headerShown: false,
      }}
      initialRouteName={"SearchResult"}
      >
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
        <Stack.Screen name={"SearchResult"} component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
