import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeSearch from "../HomeSearch";
import MapView from "react-native-maps";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const HomeMap = () => {
  return (
    <View style={styles.map}>
      <View style={styles.HomeSearch}>
        <HomeSearch />
      </View>
      <MapView
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -27.4705,
          longitude: 153.026,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -27.4705,
            longitude: 153.026,
          }}
        ></Marker>
      </MapView>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  map: {
    marginTop: 25,
    height: 1000,
    zIndex: 0,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
  },
  HomeSearch: {
    //marginTop: 320,
    // height: Dimemsions.get('window').height - 320
    position: "absolute",
    zIndex: 999,
    top: 320,
    width: "100%",
  },
});
