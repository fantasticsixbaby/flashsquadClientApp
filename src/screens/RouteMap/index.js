import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyB1F0Q3wRGrbJpn7_u9kDH6WmM8VZ_z8MA";

const RouteMap = () => {
  const origin = { latitude: -27.4705, longitude: 153.026 };
  const destination = { latitude: -27.4975, longitude: 153.0137 };

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
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={6}
          strokeColor="#341f97"
        />
      </MapView>
    </View>
  );
};

export default RouteMap;

const styles = StyleSheet.create({
  map: {
    marginTop: 25,
    height: 1000,
    //backgroundColor: "#a0abff",
  },
});
