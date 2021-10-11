import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const Signup = () => {
  return (
    <View style={{ width: "50%", marginTop: 50, marginLeft: 100 }}>
      <Text style={{ color: "grey", fontSize: 25 }}>FLASH SQUAD</Text>

      <View
        style={{ width: "50%", height: "10%", marginTop: 80, marginLeft: -50 }}
      >
        <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
          Sign Up
        </Text>

        <Text style={{ color: "blue", fontSize: 15, marginTop: 30 }}>
          Display Name
        </Text>

        <TextInput style={[styles.underline]}></TextInput>

        <Text style={{ marginTop: 20, color: "blue", fontSize: 15 }}>
          Email
        </Text>

        <TextInput style={[styles.underline]}></TextInput>

        <Text style={{ marginTop: 20, color: "blue", fontSize: 15 }}>
          Password
        </Text>

        <TextInput style={[styles.underline]}></TextInput>

        <Text style={{ marginTop: 20, color: "blue", fontSize: 15 }}>
          Re-Password
        </Text>

        <TextInput style={[styles.underline]}></TextInput>

        <View
          style={{
            backgroundColor: "blue",
            marginLeft: -10,
            marginTop: 60,
            width: 180,
            height: 35,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  underline: {
    color: "black",
    fontSize: 15,
    width: 200,
    borderBottomWidth: 0.5,
    marginTop: 30,
  },
});
