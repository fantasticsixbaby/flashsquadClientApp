import React from "react";
import { StyleSheet, View, Text, FlatList, StatusBar, TouchableOpacity } from "react-native";
import BottomSheet from "react-native-simple-bottom-sheet";
import cars from "../../data/cars";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>Driver: {item.driver}</Text>
    <Text style={styles.title}>StartingPoint: {item.StartingPoint}</Text>
    <Text style={styles.title}>Destination: {item.Destination}</Text>
  </View>
);

const BottomSheetForClient = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <BottomSheet isOpen>
        <FlatList
          data={cars}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("RouteMap", { Info : item, })}>
                <Item item={item} />
              </TouchableOpacity>
              
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
  },
  title: {
    fontSize: 15,
  },
});

export default BottomSheetForClient;
