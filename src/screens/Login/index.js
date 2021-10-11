import React from 'react'
import { Text, View, StyleSheet, TextInput} from 'react-native';

const Login = () => {
    return (
        <View
    style={{ width: "50%", height: "50%", marginTop: 100, marginLeft: 100 }}
  >
    <Text style={{ color: "grey", fontSize: 25 }}>FLASH SQUAD</Text>
    <View
      style={{ width: "50%", height: "50%", marginTop: 80, marginLeft: -50 }}
    >
      <Text style={{ color: "black", fontSize: 20 }}>Log In</Text>

      <Text style={{ marginTop: 20, color: "blue", fontSize: 15 }}>Email</Text>
      <TextInput style={[styles.underline]}></TextInput>

      <Text style={{ marginTop: 20, color: "blue", fontSize: 15 }}>
        Password
      </Text>
      <TextInput style={[styles.line]}></TextInput>
    </View>

    <View
      style={{
        backgroundColor: "blue",
        marginTop: 50,
        marginLeft: -50,
        marginTop: 30,
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
        Log In
      </Text>
    </View>

    <View style={{ marginTop: 50, marginLeft: -50 }}>
      <Text style={{ color: "grey", fontSize: 15 }}>Forget Password</Text>
    </View>
  </View>
    )
}

export default Login

const styles = StyleSheet.create({
    underline: {
        color: "black",
        fontSize: 15,
        width: 200,
        borderBottomWidth: 0.5,
        marginTop: 10,
      },
      line: {
        color: "black",
        fontSize: 15,
        width: 200,
        borderBottomWidth: 0.5,
        marginTop: 10,
      },
      click: {
        color: "blue",
        marginTop: 30,
      },
})
