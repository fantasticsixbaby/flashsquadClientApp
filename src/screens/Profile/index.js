import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { IconButton, Colors } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const backButton = () => {
    URL;
  };
  const changeButton = () => {
    URL;
  };
  const saveButton = () => {
    URL;
  };
  return (
    <View style={{ backgroundColor: "#fff", height: 800 }}>
      <View style={styles.drawer}>
        <IconButton
          icon="account-circle"
          color={"#218cff"}
          size={40}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </View>
      <View style={{ marginLeft: 45, marginTop: 80 }}>
        <View style={styles.row_show}>
          {/* 头像，链接数据库 */}
          <Avatar.Image
            size={150}
            style={styles.head}
            source={require("../../images/head.jpeg")}
          />

          <IconButton
            size={40}
            color={"#fff"}
            icon="camera"
            style={styles.change}
            onPress={changeButton}
          />

          <Button onPress={saveButton} style={styles.save} mode="contained">
            Save
          </Button>
        </View>

        <View style={styles.icon}>
          <Text style={styles.word}>Name</Text>
          <Text style={styles.input}>User Name</Text>
        </View>

        <View style={styles.icon}>
          <Text style={styles.word}>Major</Text>
          <Text style={styles.input}>Major</Text>
        </View>

        <View style={styles.icon}>
          <Text style={styles.word}>Degree</Text>
          <Text style={styles.input}>Degree, such as Bachelor</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({

  drawer: {
    position: "absolute",
    zIndex: 999,
    top: 30,
    width: "100%",
    marginLeft: 10,
  },
  head: {
    width: 150,
    height: 150,
    marginTop: -40,
    marginLeft: 30,
  },
  icon: { width: 50, height: 50, marginTop: 50 },
  row_show: { flexDirection: "row", marginTop: 40 },
  change: {
    width: 60,
    height: 60,
    marginTop: 50,
    marginLeft: -50,
    borderRadius: 100,
    backgroundColor: "#218cff",
    borderRadius: 100,
  },
  word: { width: 100, fontSize: 20, marginBottom: 10 },
  input: {
    borderColor: "#000000",
    borderWidth: 0.5,
    width: 300,
    height: 40,
    padding: 10,
  },
  save: {
    width: 80,
    height: 38,
    borderRadius: 10,
    marginTop: -60,
    marginLeft: 40,
    backgroundColor: "#218cff",
  },
});
