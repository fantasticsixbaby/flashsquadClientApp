import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";
import Notifications from "../../components/Notifications";

const HomeScreen = () => {
  return (
    <View
      style={{
        height: 1000,
        backgroundColor: "#a0abff",
        
      }}
    >
    <View style={styles.map}>
    <Text> i AM MAP</Text>
    </View>
    
      <View
        style={{
          marginTop: 370,
        }}
      >
        <HomeSearch />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    map: {
        justifyContent: "center",
        alignItems: "center",
        
    }
});
