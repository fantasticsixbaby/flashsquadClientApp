import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Auth } from "aws-amplify";

const CustomNavigation = () => {
  return (
    <DrawerContentScrollView>
      <Pressable
        onPress={() => {
          Auth.signOut();
        }}
      >
        <Text style={{ padding: 5, paddingLeft: 20 }}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomNavigation;

const styles = StyleSheet.create({});
