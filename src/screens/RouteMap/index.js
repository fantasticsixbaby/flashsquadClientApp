import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView from "react-native-maps";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import RouteMapCard from "../../components/RouteMapCard";

const GOOGLE_MAPS_APIKEY = "AIzaSyB1F0Q3wRGrbJpn7_u9kDH6WmM8VZ_z8MA";

const RouteMap = () => {
  const origin = { latitude: -27.4975, longitude: 153.0 };
  const destination = { latitude: -27.4975, longitude: 153.0137 };

  return (
    <View style={styles.map}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        showUserLocation={true}
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
          strokeColor="#218cff"
        />
        <Marker coordinate={origin}>
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: "contain",
              transform: [
                {
                  rotate: `170deg`,
                },
              ],
            }}
            source={require("../../images/top-UberX.png")}
          />
        </Marker>
        <Marker coordinate={destination}></Marker>
      </MapView>
      <View style={styles.card}>
        <RouteMapCard />
      </View>
    </View>
  );
};

export default RouteMap;

const styles = StyleSheet.create({
  map: {
    marginTop: 25,
    height: 1000,
    zIndex: 1,
  },
  card: {
    position: "absolute",
    zIndex: 999,
    top: 430,
    width: "90%",
    margin: 20,
  },
});
