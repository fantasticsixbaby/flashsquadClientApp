import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomeSearch = () => {
  return (
    <View>
      {/*input box*/}
      <View style={styles.inputbox}>
        <Text style={styles.inputText}>Where to ?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={"clockcircle"} size={16} color={"#535353"} />
          <Text>Now</Text>
          <MaterialIcons name={"keyboard-arrow-down"} size={16} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={"clockcircle"} size={20} color={"#ffffff"} />
        </View>
        <Text style={styles.destinationText}>UQ Libary-St Lucia</Text>
      </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  inputbox: {
    backgroundColor: "#e7e7e7",
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#434343",
  },
  timeContainer: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
    width: 100,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
  },
  row: {
      flexDirection: 'row',

  },
  iconContainer: {
      backgroundColor: '#b3b3b3',
      padding: 10,
      borderRadius: 25,
      

  },
  destinationText: {

  }
});
