import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";

const Rating = () => {
  return (
    <View style={{ marginTop: 100 }}>
      <View style={styles.nav}>
        <Text style={{ marginLeft: 30, marginTop: 40, fontSize: 20 }}>
          Review Your Trip
        </Text>
      </View>

      <View style={styles.body}>
        <Text style={{ marginLeft: 55, marginTop: 20, fontSize: 20 }}>
          Your Trip Has Completed!
        </Text>

        <Image
          style={styles.comp}
          source={require("../../images/complete.png")}
        />

        <View style={{ flexDirection: "row", marginLeft: 80, marginTop: 20 }}>
          <Image
            style={styles.head}
            source={require("../../images/head.jpeg")}
          />
          <Text style={styles.word}>Chris Zhang</Text>
        </View>

        <Text style={{ marginLeft: "25%", marginTop: 20, fontSize: 20 }}>
          Rate your driver:
        </Text>

        <View style={{ marginTop: 10, marginLeft: 60 }}></View>

        <View
          style={{
            marginTop: 30,
            marginLeft: 40,
            width: 280,
            height: 70,
            borderColor: "blue",
            borderWidth: 1.5,
            borderRadius: 10,
            backgroundColor: "white",
          }}
        >
          <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 3 }}>
            <Image
              style={styles.address}
              source={require("../../images/address.png")}
            />
            <Text style={{ marginLeft: 5, fontSize: 13 }}>出发点</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 10 }}>
            <Image
              style={styles.address}
              source={require("../../images/address.png")}
            />
            <Text style={{ marginLeft: 5, fontSize: 13 }}>目的地</Text>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "#DCDCDC", height: 30 }}></View>

      <View style={styles.back}>
        <Image
          style={{
            width: 180,
            height: 40,
            borderRadius: 8,
            marginLeft: "25%",
            marginTop: "7%",
          }}
          source={require("../../images/submit.png")}
        />
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  head: { width: 50, height: 50, marginLeft: 5, borderRadius: 100 },
  body: { backgroundColor: "#DCDCDC" },
  word: { width: 400, fontSize: 20, marginTop: 13, marginLeft: 20 },
  comp: {
    width: 120,
    height: 120,
    marginLeft: 100,
    marginTop: 20,
    borderRadius: 100,
  },
  nav: {
    width: "100%",
    height: 100,
    marginTop: -50,
    backgroundColor: "#F5F5F5",
  },
  star: { width: 35, height: 30, marginLeft: 8 },
  back: { width: "100%", height: 100, backgroundColor: "#F5F5F5" },
  address: { width: 20, height: 20 },
});
