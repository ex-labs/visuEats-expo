import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { IconInput } from "../";

class HomeHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ marginVertical: 30, marginHorizontal: 10 }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={this.props.onPress}
              style={styles.button}
            >
              <Text style={styles.text}>Logout</Text>
              <AntDesign name="logout" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <IconInput placeholder="Search for your restaurant" name="search" />
          <IconInput placeholder="Current Location" name="map-marker" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00a8ac",
    height: 230,
    alignItems: "flex-end",
  },

  title: {
    margin: 15,
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  inputContainer: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    marginRight: 10,
  },
});

export default HomeHeader;
