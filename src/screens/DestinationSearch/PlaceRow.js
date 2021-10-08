import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={22} color={"#341f97"}></Entypo>
      </View>
      <Text style={styles.locationText}>{data.description}</Text>
    </View>
  );
};

export default PlaceRow;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    iconContainer: {
        padding: 3
    },
    locationText: {

    }
});
