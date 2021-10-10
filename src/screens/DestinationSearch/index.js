import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import PlaceRow from "./PlaceRow";
import { useNavigation } from "@react-navigation/native";

const DestinationSearch = () => {
  const navigation = useNavigation();
  const [fromText, setFromText] = useState("");
  const [destinationText, setDestinationText] = useState("");
  const [originPlace, setOriginalPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (destinationPlace) {
      navigation.navigate("SearchResult", {
        destinationPlace
      });
    }
  }, [destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Where from"
          value={fromText}
          onChangeText={setFromText}
          editable={false}
        ></TextInput>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          styles={{
            textInput: {
              borderRadius: 10,
              padding: 8,
              backgroundColor: "#eee",
              marginVertical: 5,
            },
            container: {
              position: "absolute",
              top: 70,
              left: 40,
              right: 10,
            },
          }}
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
            //console.log(data, details);
          }}
          fetchDetails
          query={{
            key: "AIzaSyB1F0Q3wRGrbJpn7_u9kDH6WmM8VZ_z8MA",
            language: "en",
          }}
          renderRow={(data) => <PlaceRow data={data} /> }
          enablePoweredByContainer={false}
        />
        {/* Decoration */}
        <View style={styles.from}/>
        <View style={styles.line}/>
        <View style={styles.to}/>
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
  },
  textInput: {
    position: "absolute",
    top: 15,
    left: 40,
    right: 10,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#eee",
    marginVertical: 5,
  },
  from: {
    width: 15,
    height: 15,
    backgroundColor: "#218cff",
    position: 'absolute',
    top: 35,
    left: 11,
    borderRadius: 10,
    
  },
  line: {
    width: 3,
    height: 60,
    backgroundColor: '#218cff',
    position: 'absolute',
    top: 45,
    left: 17,
  },
  to: {
    width: 20,
    height: 20,
    backgroundColor: "#218cff",
    position: 'absolute',
    top: 90,
    left: 10,
    borderRadius: 10,
  }
});
