import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const Width = Dimensions.get("window").width;

class HomeHeader extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.props.onPress}
            style={styles.button}
          >
            <MaterialIcons
              name="arrow-back"
              style={{ margin: 5 }}
              size={20}
              color="white"
            />
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#000000",
    height: 200,
    width: Width,
    flexDirection: "row",
  },

  title: {
    margin: 15,
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },

  button: {
    flexDirection: "row",
    marginVertical: 60,
    marginHorizontal: 10,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    margin: 5,
  },
});

export default HomeHeader;
