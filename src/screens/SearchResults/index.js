import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView from "react-native-maps";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const SearchResults = () => {
  return (
    <View style={styles.map}>
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
        >
          <Image
            style={{ width: 60, height: 60, resizeMode: "contain" }}
            source={require("../../images/top-UberX.png")}
          />
        </Marker>
      </MapView>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  map: {
    marginTop: 25,
    height: 1000,
    //backgroundColor: "#a0abff",
  },
});
