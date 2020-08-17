import React from "react";
import { View, Text } from "native-base";
import { StyleSheet } from "react-native";

class RegisterHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>visuEats</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00a8ac",
    height: 150,
    justifyContent: "center",
  },

  title: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RegisterHeader;
