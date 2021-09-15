import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  TextInput,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Searchbar, Button as StyledButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

const HomeSearch = () => {
  const newdate = new Date();
  const hours = newdate.getHours();
  const minutes = newdate.getMinutes();
  const makeTwoDigits = (time) => {
    const timeString = `${time}`;
    if (timeString.length === 2) return time;
    return `0${time}`;
  };

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [time, setTime] = useState(`${makeTwoDigits(hours)}:${makeTwoDigits(minutes)}`);
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);
  const [startingPoint, setStartingPoint] = React.useState("");
  const [destination, setDestination] = React.useState("");

  const onChange = (event, selectedTime) => {
    const hours = selectedTime.getHours();
    const minutes = selectedTime.getMinutes();
    const currentTime = `${makeTwoDigits(hours)}:${makeTwoDigits(minutes)}` || time;
    setShow(Platform.OS === 'ios');
    setTime(currentTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.wholeSearch}>
      {/*input box*/}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign
            onPress={showTimepicker}
            name={"clockcircle"}
            size={20}
            color={"#218cff"}
          />
        </View>
        <TextInput
          style={{ height: 40, marginLeft: 20 }}
          placeholder="Right Now"
          defaultValue={time.toString()}
        />
      </View>

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <MaterialIcons name={"location-pin"} size={25} color={"#218cff"} />
        </View>
        <TextInput
          style={{ height: 40, marginLeft: 20 }}
          placeholder="West End"
          onChangeText={(text) => setStartingPoint(text)}
          defaultValue={startingPoint}
        />
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer]}>
          <Entypo name={"home"} size={25} color={"#218cff"} />
        </View>
        <TextInput
          style={{ height: 40, marginLeft: 20 }}
          placeholder="Where to go?"
          defaultValue={destination}
        />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={styles.button}>
        <StyledButton
          color="#218cff"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          COMFIRMED
        </StyledButton>
      </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  inputText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ffffff",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#dbdbdb",
  },
  iconContainer: {
    backgroundColor: "#ffffff",
    padding: 5,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 16,
  },
  button: {
    margin: 10,
  },
  wholeSearch: {
    height: 250,
    margin: 20,
    borderRadius: 15,
    backgroundColor: "#ffffff",
  },
});
