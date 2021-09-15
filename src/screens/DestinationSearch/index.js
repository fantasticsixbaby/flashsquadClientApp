import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearch = () => {
  const [fromText, setFromText] = useState("");
  const [destinationText, setDestinationText] = useState("");
  const [originPlace, setOriginalPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
      if (fromText && destinationPlace) {
          console.warn('redirect to result page');
      }
  }, [fromText, destinationPlace])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Where from"
          value={fromText}
          onChangeText={setFromText}
        ></TextInput>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          styles={{textInput: styles.textInput}}
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            //console.log(data, details);
          }}
          fetchDetails
          query={{
            key: "AIzaSyB1F0Q3wRGrbJpn7_u9kDH6WmM8VZ_z8MA",
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 25,
    height: 1000,
    backgroundColor: "#a0abff",
  },
  textInput: {
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#eee",
    marginVertical: 5,
  },
});
