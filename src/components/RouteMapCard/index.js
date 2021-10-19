import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const RouteMapCard = () => {
  const navigation = useNavigation();
  const CompleteOrder = () => {
    navigation.navigate("Rating")
  }
  const NOTCompleteOrder = () => {
    navigation.navigate("HomeScreen")
  }
  return (
    <Card  style={{opacity: 0.92,}}>
      <Card.Content>
        <Title style={{ marginLeft: 20 }}>From UQ to Toowong</Title>
        <Paragraph style={{ marginLeft: 20, marginBottom: 20 }}>
          Time: 20mins
        </Paragraph>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={CompleteOrder}
            style={styles.button}
          >
            Complete
          </Button>
          <Button
            mode="contained"
            onPress={NOTCompleteOrder}
            style={styles.button}
          >
            Not Complete
          </Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};

export default RouteMapCard;

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
    backgroundColor: "#218cff",
  },
});
