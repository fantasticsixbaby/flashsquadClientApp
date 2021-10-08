import React, { useState , useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  TextInput,
  PermissionsAndroid,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Searchbar, Button as StyledButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const HomeSearch = () => {
  const newDate = new Date();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const makeTwoDigits = (time) => {
    const timeString = `${time}`;
    if (timeString.length === 2) return time;
    return `0${time}`;
  };

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [time, setTime] = useState(
    `${makeTwoDigits(hours)}:${makeTwoDigits(minutes)}`
  );
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);
  const [startingPoint, setStartingPoint] = React.useState(null);
  const [destination, setDestination] = React.useState(null);

  const onChange = (event, selectedTime) => {
    const hours = selectedTime.getHours();
    const minutes = selectedTime.getMinutes();
    const currentTime =
      `${makeTwoDigits(hours)}:${makeTwoDigits(minutes)}` || time;
    setShow(Platform.OS === "ios");
    setTime(currentTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.warn('Permission to access location was denied');
        return;
      }else {
        Location.installWebGeolocationPolyfill();
      }
    })();
  }, []);
  

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

      {/* Starting Point*/}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <MaterialIcons name={"location-pin"} size={25} color={"#218cff"} />
        </View>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          style={{ height: 40, marginLeft: 10 }}
          fetchDetails
          query={{
            key: "AIzaSyB1F0Q3wRGrbJpn7_u9kDH6WmM8VZ_z8MA",
            language: "en",
          }}
          enablePoweredByContainer={false}
          currentLocation={true}
          onPress={(data, details = null) => {
            setStartingPoint({ data, details });
          }}
        />
      </View>

      {/* Destination */}
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
