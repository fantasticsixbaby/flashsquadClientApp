import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { IconButton } from "react-native-paper";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { AirbnbRating } from "react-native-ratings";

const Evaluation = () => {
  const navigation = useNavigation();
  const state = {
    show: true,
    score: 3 /**score 是从数据库获取的得分 */,
  };

  const backButton = () => {
    URL;
  };
  const historyButton = () => {
    URL;
  };
  const rewardButton = () => {
    URL;
  };
  const profileButton = () => {
    URL;
  };
  const switchButton = () => {
    URL;
  };
  return (
    <View style={{ marginTop: 25, backgroundColor: "#fff", height: 700 }}>
      <View style={styles.back}>
        <IconButton
          icon="account-circle"
          color={"#218cff"}
          size={40}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </View>

      {/* 头像，链接数据库 */}
      <View style={styles.row_show}>
        <Image
          style={styles.person}
          source={require("../../images/head.jpeg")}
        />
        <Text style={{ marginTop: 30, marginLeft: 30, fontSize: 23 }}>
          Chris Zhang
        </Text>
      </View>

      <View>
        <Text style={styles.major}>Mater of Information Technology</Text>
      </View>

      <Text style={{ marginTop: 20, fontSize: 20, marginLeft: 120 }}>
        Passenger
      </Text>

      {/**获取分值,展示星星 */}

      <View style={{ marginTop: 20}}>
        <View>
          <AirbnbRating
            count={5}
            reviews={["Bad", "OK", "Good", "Very Good", "Awesome"]}
            defaultRating={4}
            size={20}
          />
        </View>
      </View>

      <View style={{ marginLeft: 20 }}>
        <View style={styles.row_show}>
          <Image
            style={styles.icon}
            source={require("../../images/history.png")}
          />
          <Text style={styles.text} onPress={historyButton}>
            Trip history
          </Text>
        </View>

        <View style={styles.row_show}>
          <Image
            style={styles.icon}
            source={require("../../images/reward.png")}
          />
          <Text style={styles.text} onPress={rewardButton}>
            Reward
          </Text>
        </View>

        <View style={styles.row_show}>
          <Image
            style={styles.icon}
            source={require("../../images/profile.png")}
          />
          <Text style={styles.text} onPress={profileButton}>
            Profile
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Evaluation;

const styles = StyleSheet.create({
  back: { width: 50, height: 50, marginTop: 30, marginLeft: 30 },
  person: {
    width: 90,
    height: 90,
    marginLeft: 5,
    borderRadius: 100,
    marginLeft: 70,
  },
  icon: { width: 25, height: 25, marginLeft: 40 },
  row_show: { flexDirection: "row", marginTop: 30 },
  major: { marginLeft: 70, marginTop: 20, fontSize: 18 },
  text: { fontSize: 18, marginLeft: 10 },
  star: { width: 200, height: 30 },
});
