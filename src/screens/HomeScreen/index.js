import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeMap from "../../components/HomeMap";
import DestinationSearch from "../DestinationSearch";
import SearchResults from "../SearchResults";
import RouteMap from "../RouteMap";


const HomeScreen = () => {
  return (
    <>
    <RouteMap />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    
});
