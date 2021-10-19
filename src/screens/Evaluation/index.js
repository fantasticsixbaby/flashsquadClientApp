import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { IconButton } from "react-native-paper";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const Evaluation = () => {
    state = {
        show: true,
        score: 3 /**score 是从数据库获取的得分 */,
        show1: require("../../images/score1.png"),
        show2: require("../../images/score2.png"),
        show3: require("../../images/score3.png"),
        show4: require("../../images/score4.png"),
        show5: require("../../images/score5.png"),
      };

  backButton = () => {
    URL;
  };
  histiryButton = () => {
    URL;
  };
  rewardButton = () => {
    URL;
  };
  profileButton = () => {
    URL;
  };
  switchButton = () => {
    URL;
  };
  return (
    <View style={{ marginLeft: 30, marginTop: 130 }}>
        <Image
          onPress={this.backButton}
          style={styles.back}
          source={require("../../images/star.png")}
        />

        <Text
          onPress={this.switchButton}
          style={{ marginTop: 20, fontSize: 20 }}
        >
          Switch to driver
        </Text>

        {/* 头像，链接数据库 */}
        <View style={styles.row_show}>
          <Image
            style={styles.name}
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

        <View style={{ marginTop: 20, marginLeft: 50 }}>
          <View>
            <Image
              style={styles.star}
              source={
                this.state.score < 2
                  ? this.state.show1
                  : this.state.score < 3
                  ? this.state.show2
                  : this.state.score < 4
                  ? this.state.show3
                  : this.state.score < 5
                  ? this.state.show4
                  : this.state.show5
              }
            />
          </View>
        </View>

        <View style={{ marginLeft: 20 }}>
          <View style={styles.row_show}>
            <Image
              style={styles.icon}
              source={require("../../images/history.png")}
            />
            <Text style={styles.text} onPress={this.histiryButton}>
              Trip history
            </Text>
          </View>

          <View style={styles.row_show}>
            <Image
              style={styles.icon}
              source={require("../../images/reward.png")}
            />
            <Text style={styles.text} onPress={this.rewardButton}>
              Reward
            </Text>
          </View>

          <View style={styles.row_show}>
            <Image
              style={styles.icon}
              source={require("../../images/profile.png")}
            />
            <Text style={styles.text} onPress={this.profileButton}>
              Profile
            </Text>
          </View>
        </View>
      </View>
  );
};

export default Evaluation;

const styles = StyleSheet.create({
  back: { width: 50, height: 50, marginTop: -80, marginLeft: -20 },
  name: { width: 90, height: 90, marginLeft: 5, borderRadius: 100 },
  icon: { width: 25, height: 25 },
  row_show: { flexDirection: "row", marginTop: 30 },
  major: { marginLeft: 30, marginTop: 20, fontSize: 18 },
  text: { fontSize: 18, marginLeft: 10 },
  star: { width: 200, height: 30 },
});
