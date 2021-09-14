import React, { useState } from "react";
import { StyleSheet, Text, View, Platform, Button, TextInput, } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {
  Searchbar,
  Button as StyledButton,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

const HomeSearch = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = React.useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.wholeSearch}>
      {/*input box*/}
      <View style={styles.row}>
      <View style={styles.iconContainer}>
        <AntDesign name={"clockcircle"} size={20} color={"#218cff"} />
      </View>
      <TextInput
        style={{height: 40, marginLeft: 20}}
        placeholder="Right Now"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
    </View>

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <MaterialIcons name={"location-pin"} size={25} color={"#218cff"} />
        </View>
        <TextInput
        style={{height: 40, marginLeft: 20}}
        placeholder="West End"
        defaultValue={text}
      />
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer]}>
          <Entypo name={"home"} size={25} color={"#218cff"} />
        </View>
        <TextInput
        style={{height: 40, marginLeft: 20}}
        placeholder="Where to go?"
        defaultValue={text}
      />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={styles.button}>
        <StyledButton color="#218cff" mode="contained" onPress={() => console.log("Pressed")}>
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
    backgroundColor: '#ffffff'
  }
});
