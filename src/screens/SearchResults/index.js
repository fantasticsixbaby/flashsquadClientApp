import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView from "react-native-maps";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import BottomSheetForClient from "../../components/BottomSheet";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../graphql/queries";

const SearchResults = () => {
  const [cars, setCars] = useState([]);
  const route = useRoute();
  //console.log(route.params);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listCars));
        setCars(response.data.listCars.items);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCars();
  }, []);
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
        {cars.map((car) => (
          <Marker
            key={car.id}
            coordinate={{
              latitude: car.latitude,
              longitude: car.longitude,
            }}
          >
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain",
                transform: [
                  {
                    rotate: `${car.heading}deg`,
                  },
                ],
              }}
              source={require("../../images/top-UberX.png")}
            />
          </Marker>
        ))}
      </MapView>
      <BottomSheetForClient cars={cars} />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  map: {
    height: 700,
  },
});
