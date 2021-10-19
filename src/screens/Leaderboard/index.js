import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { IconButton } from "react-native-paper";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const LeaderBoard = () => {
  const navigation = useNavigation();
  const state = {
    show: true,
    sharings_owner: 10, // 需要调用数据库里的数,这里是假设
    sharings_rank1: 50, // 需要调用数据库里的数,这里是排名第1的
    sharings_rank2: 46, // 需要调用数据库里的数,这里是排名第2的
    sharings_rank3: 32, // 需要调用数据库里的数,这里是排名第3的
    sharings_rank4: 21, // 需要调用数据库里的数,这里是排名第3的
    sharings_rank5: 15, // 需要调用数据库里的数,这里是排名第3的
  };

  const backButton = () => {
    setState({ show: !state.show });
  };
  return (
    <View style={{ marginTop: 25, backgroundColor: "#fff", height: 700}}>
      <View style={{ flexDirection: "row", width: 300, height: 70, marginTop: 30 }}>
        <View style={styles.back}>
          <IconButton
            icon="account-circle"
            color={"#218cff"}
            size={40}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </View>
        <Text
          style={{
            marginLeft: 60,
            marginTop: 10,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Leaderboard
        </Text>
      </View>

      <View style={{ backgroundColor: "white", marginTop: 20 }}>
        {/**排名*/}
        <View style={styles.row_show}>
          {/**第二名*/}
          <View style={{ marginTop: 10 }}>
            <Image
              style={styles.rank}
              source={require("../../images/rank2.png")}
            />
            <Image
              style={styles.rankphoto}
              source={require("../../images/11.png")}
            />

            <Text style={{ marginLeft: 15, fontSize: 14 }}>Lily Chen</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginLeft: 10, fontSize: 14 }}>
                Lv.
                {state.sharings_rank2 < 10
                  ? 0
                  : Math.floor(state.sharings_rank2 / 10)}
              </Text>
              <Text style={{ marginLeft: 7, fontSize: 14 }}>
                {state.sharings_rank2} sharings
              </Text>
            </View>
          </View>

          {/**第一名*/}
          <View style={{ marginTop: -10, marginLeft: 10 }}>
            <Image
              style={styles.rank}
              source={require("../../images/rank1.png")}
            />
            <Image
              style={styles.rankphoto}
              source={require("../../images/1.png")}
            />

            <Text style={{ marginLeft: 15, fontSize: 14 }}>Chris Zhang</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginLeft: 10, fontSize: 14 }}>
                Lv.
                {state.sharings_rank1 < 10
                  ? 0
                  : Math.floor(state.sharings_rank1 / 10)}
              </Text>
              <Text style={{ marginLeft: 7, fontSize: 14 }}>
                {state.sharings_rank1} sharings
              </Text>
            </View>
          </View>
          {/**第三名*/}
          <View style={{ marginTop: 10, marginLeft: 5 }}>
            <Image
              style={styles.rank}
              source={require("../../images/rank3.png")}
            />
            <Image
              style={styles.rankphoto}
              source={require("../../images/3.png")}
            />

            <Text style={{ marginLeft: 15, fontSize: 14 }}>Yang Zhang</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginLeft: 10, fontSize: 14 }}>
                Lv.
                {state.sharings_rank3 < 10
                  ? 0
                  : Math.floor(state.sharings_rank3 / 10)}
              </Text>
              <Text style={{ marginLeft: 7, fontSize: 14 }}>
                {state.sharings_rank3} sharings
              </Text>
            </View>
          </View>
        </View>

        <View style={{ height: 40 }}></View>

        <View style={{ marginLeft: 20 }}>
          {/**第四名*/}
          <View style={styles.row_show}>
            <Text>No.4</Text>
            <Image
              style={styles.rankphoto_low}
              source={require("../../images/4.png")}
            />
            <Text style={{ marginLeft: 15, fontSize: 14 }}>Rui Zhang</Text>

            <Text style={{ marginLeft: 10, fontSize: 14 }}>
              Lv.
              {state.sharings_rank4 < 10
                ? 0
                : Math.floor(state.sharings_rank4 / 10)}
            </Text>
            <Text style={{ marginLeft: 7, fontSize: 14 }}>
              {state.sharings_rank4} sharings
            </Text>
          </View>

          <View style={{ height: 20 }}></View>

          {/**第五名*/}
          <View style={styles.row_show}>
            <Text>No.5</Text>
            <Image
              style={styles.rankphoto_low}
              source={require("../../images/9.png")}
            />
            <Text style={{ marginLeft: 15, fontSize: 14 }}>Justin Ren</Text>

            <Text style={{ marginLeft: 10, fontSize: 14 }}>
              Lv.
              {state.sharings_rank5 < 10
                ? 0
                : Math.floor(state.sharings_rank5 / 10)}
            </Text>
            <Text style={{ marginLeft: 7, fontSize: 14 }}>
              {state.sharings_rank5} sharings
            </Text>
          </View>

          <View style={{ height: 20 }}></View>

          {/**用户*/}
          <View style={styles.row_show}>
            <Text>No.6</Text>
            <Image
              style={styles.rankphoto_low}
              source={require("../../images/10.png")}
            />
            <Text style={{ marginLeft: 15, fontSize: 14 }}> 用户 </Text>

            <Text style={{ marginLeft: 10, fontSize: 14 }}>
              Lv.
              {state.sharings_owner < 10
                ? 0
                : Math.floor(state.sharings_owner / 10)}
            </Text>
            <Text style={{ marginLeft: 7, fontSize: 14 }}>
              {state.sharings_owner} sharings
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({
  back: { width: 60, height: 60, marginTop: -5, marginLeft: 20 },
  row_show: { flexDirection: "row", marginTop: 30, marginLeft: 30 },
  rank: { width: 50, height: 35, marginLeft: 5 },
  rankphoto: { width: 40, height: 40, borderRadius: 100, marginLeft: 30 },
  rankphoto_low: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginLeft: 15,
    marginTop: -10,
  },
});
