import React from "react";
import { View, Text, TextInput, StyleSheet, Image, Button, Alert } from "react-native";
import { IconButton } from "react-native-paper";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const RewardPage = () => {
    const navigation = useNavigation();
    const state = { 
        show:true,
      sharings:10, // 需要调用数据库里的数,这里是假设
      sharings_rank1:50, // 需要调用数据库里的数,这里是排名第1的
      sharings_rank2:35, // 需要调用数据库里的数,这里是排名第2的
      sharings_rank3:20, // 需要调用数据库里的数,这里是排名第3的
    }

 
    const backButton =() => {
       
    }
    const histiryButton =()=> {
        
    }
     const rewardButton =()=> {
       
    }
    const profileButton =()=> {
       
    }
    const switchButton =()=> {
        
    }
    const conpButton=()=> {
      alert('10% off at UQ Canteen \n 9/16/2021-12/12/2021 \n Coupon redeem code: 12345')
    }
  return (
    <View style={{ marginTop: 50 }}>
      <View style={{ flexDirection: "row", width: 300, height: 70 }}>
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
            marginLeft: 80,
            marginTop: 10,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Reward
        </Text>
      </View>

      <View style={{ backgroundColor: "#EFF0F2", marginTop: 10 }}>
        {/* 头像，名字链接数据库 */}
        <View style={styles.row_show}>
          <Image style={styles.name} source={require("../../images/head.jpeg")} />
          <View style={{ flexDirection: "column", marginTop: 10 }}>
            <Text style={{ marginLeft: 15, fontSize: 18 }}>Chris Zhang</Text>
            <View style={{ flexDirection: "row" }}>
              {/* 名字下面 等级和sharing的数据 */}
              <Text style={{ marginLeft: 15, fontSize: 18 }}>
                Lv.
                {state.sharings < 10
                  ? 0
                  : Math.floor(state.sharings / 10)}
              </Text>
              <Text style={{ marginLeft: 10, fontSize: 18 }}>
                {state.sharings} sharings
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <Text
            style={{
              marginLeft: 250,
              marginTop: -20,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Task
          </Text>
          <View style={styles.black_line}></View>

          {/* Task下 等级和sharing的数据 */}
          <View style={styles.row_show}>
            <Text>
              to Lv.
              {state.sharings < 10
                ? 1
                : Math.floor(state.sharings / 10) + 1}{" "}
            </Text>
            <Text style={{ marginLeft: 180 }}>
              {" "}
              {state.sharings < 10
                ? 10 - state.sharings
                : state.sharings % 10 == 0
                ? 0
                : 10 - (state.sharings % 10)}{" "}
              /10 sharings
            </Text>
          </View>
          <View
            style={{
              height: 3,
              width: 320,
              backgroundColor: "black",
              marginTop: 5,
            }}
          ></View>

          {/* coupon */}
          <Text
            style={{
              marginLeft: 240,
              marginTop: 30,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Coupon
          </Text>
          <View style={styles.black_line}></View>

          <Text style={{ fontSize: 15, marginTop: 35 }}>
            You will get a new coupon for every new level
          </Text>

          <View style={{ height: 20 }}></View>

          <View style={styles.conp}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginLeft: 10, marginTop: 5 }}>
                <Text style={styles.conp_text}>10% off at UQ Canteen</Text>
                <Text style={styles.conp_text}>9/16/2021-12/12/2021</Text>
              </View>
              <View style={styles.black_line_v}></View>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#2F80ED",
                  borderRadius: 10,
                  marginLeft: 15,
                  width: 90,
                  marginTop: 7,
                }}
              >
                <Text
                  onPress={conpButton}
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Sonsie One",
                    color: "white",
                    fontSize: 20,
                    marginLeft: 30,
                    marginTop: 7,
                  }}
                >
                  use{" "}
                </Text>
              </View>
            </View>
          </View>

          <View style={{ height: 10 }}></View>

          <View style={styles.conp}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginLeft: 10, marginTop: 5 }}>
                <Text style={styles.conp_text}>10% off at UQ Canteen</Text>
                <Text style={styles.conp_text}>9/16/2021-12/12/2021</Text>
              </View>
              <View style={styles.black_line_v}></View>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#C4C4C4",
                  borderRadius: 10,
                  marginLeft: 15,
                  width: 90,
                  marginTop: 7,
                }}
              >
                <Image
                  style={{ width: 35, height: 35, marginLeft: 10 }}
                  source={require("../../images/lock.png")}
                />
                <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                  Lv.
                  {state.sharings < 10
                    ? 0
                    : Math.floor(state.sharings / 10) + 1}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RewardPage;

const styles = StyleSheet.create({
  back: { width: 60, height: 60, marginTop: -5 },
  name: { width: 60, height: 60, marginLeft: 5, borderRadius: 100 },
  row_show: { flexDirection: "row", marginTop: 40 },
  black_line: {
    height: 3,
    width: 100,
    backgroundColor: "black",
    marginLeft: 220,
    marginTop: 5,
  },
  conp: {
    backgroundColor: "#FFE818",
    borderRadius: 10,
    height: 60,
    marginTop: 20,
    width: 320,
  },
  conp_text: { fontSize: 17, fontWeight: "bold" },
  black_line_v: {
    width: 2,
    backgroundColor: "black",
    marginLeft: 15,
    marginTop: 6,
  },
  rank: { width: 50, height: 35, marginLeft: 5 },
  rankphoto: { width: 40, height: 40, borderRadius: 100, marginLeft: 30 },
});
