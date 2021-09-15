import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeSearch from "../HomeSearch";
import MapView from "react-native-maps";

const HomeMap = () => {
  return (
    <View style={styles.map}>
      <View style={styles.HomeSearch}>
        <HomeSearch />
      </View>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      
      
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  map: {
    marginTop: 25,
    height: 1000,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
  },
  HomeSearch: {
    //marginTop: 320,
    position: 'absolute',
    zIndex: 999,
    top: 320,
    width: '100%',
  },
});
