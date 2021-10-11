import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { Button } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";

const RatingForDriver = () => {
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Text style={{ padding: 15, marginLeft: 10, fontSize: 20 }}>
        Review Your Trip
      </Text>

      <View style={styles.body}>
        <Text style={{ marginLeft: 90, marginTop: 10, fontSize: 20 }}>
          Your Trip Has Completed!
        </Text>

        <Image
          style={styles.comp}
          source={require("../../images/complete.png")}
        />

        <View style={{ flexDirection: "row", marginLeft: 80, marginTop: 20 }}>
          <Avatar.Image
            size={50}
            style={styles.head}
            source={require("../../images/head.jpeg")}
          />
          <Text style={styles.word}>Chris Zhang</Text>
        </View>

        <Text style={{ marginLeft: "15%", marginTop: 20, fontSize: 20 }}>
          Rate your driver:
        </Text>

        <View>
          <AirbnbRating
            count={5}
            reviews={["Bad", "OK", "Good", "Hmm...", "Very Good"]}
            defaultRating={3}
            size={20}
          />
        </View>

        <View
          style={{
            marginTop: 10,
            marginLeft: 80,
            width: 280,
            height: 70,
            borderColor: "#218cff",
            borderWidth: 1.5,
            borderRadius: 10,
            backgroundColor: "white",
            marginBottom: 20,
          }}
        >
          <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 3 }}>
            <Image
              style={styles.address}
              source={require("../../images/address.png")}
            />
            <Text style={{ marginLeft: 5, fontSize: 13 }}>start</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 10 }}>
            <Image
              style={styles.address}
              source={require("../../images/address.png")}
            />
            <Text style={{ marginLeft: 5, fontSize: 13 }}>destination</Text>
          </View>
        </View>
      </View>

      <View style={styles.back}>
        <Button
          mode="contained"
          onPress={() => {
            URL;
          }}
          style={{
            marginTop: 10,
            width: 180,
            height: 40,
            borderRadius: 8,
            marginLeft: "25%",
            backgroundColor: "#218cff",
          }}
        >
          Submit
        </Button>
      </View>
    </View>
  );
};

export default RatingForDriver;

const styles = StyleSheet.create({
  head: { marginLeft: 40 },
  body: { backgroundColor: "#DCDCDC" },
  word: { width: 400, fontSize: 20, marginTop: 13, marginLeft: 20 },
  comp: {
    width: 120,
    height: 120,
    marginLeft: 150,
    marginTop: 20,
    borderRadius: 100,
  },

  star: { width: 35, height: 30, marginLeft: 8 },
  back: { width: "100%", height: 100, backgroundColor: "#fff" },
  address: { width: 20, height: 20 },
});
