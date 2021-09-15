import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeSearch from "../HomeSearch";

const HomeMap = () => {
  return (
    <View style={styles.map}>
      <View style={styles.text}>
        <Text> i AM MAP</Text>
      </View>
      <View style={styles.HomeSearch}>
        <HomeSearch />
      </View>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  map: {
    marginTop: 25,
    height: 1000,
    backgroundColor: "#a0abff",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
  },
  HomeSearch: {
    marginTop: 320,
  },
});
