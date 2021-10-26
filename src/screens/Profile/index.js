import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";
import { Button } from "react-native-paper";
import { IconButton, Colors } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const saveButton = () => {
    console.warn("Ok");
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
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
          {image ? (
            <Avatar.Image source={{ uri: image }} style={styles.head} />
          ) : (
            <Avatar.Image
              size={150}
              style={styles.head}
              source={require("../../images/head.jpeg")}
            />
          )}

          <IconButton
            size={40}
            color={"#fff"}
            icon="camera"
            style={styles.change}
            onPress={pickImage}
          />

          <Button
            onPress={() => console.log("Pressed")}
            style={styles.save}
            mode="contained"
          >
            Save
          </Button>
        </View>

        <View style={styles.icon}>
          <Text style={styles.word}>Name</Text>
          <TextInput style={styles.input} placeholder="User Name" />
        </View>

        <View style={styles.icon}>
          <Text style={styles.word}>Major</Text>
          <TextInput style={styles.input} placeholder="Major" />
        </View>

        <View style={styles.icon}>
          <Text style={styles.word}>Degree</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Degree, such as Bachelor"
          />
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
