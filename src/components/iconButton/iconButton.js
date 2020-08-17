import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.props.onPress}
        style={styles.button}
      >
        <Text style={styles.text}>{this.props.name && this.props.name}</Text>
        <FontAwesome name="arrow-circle-right" size={20} color="#00a8ac" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  text: {
    textAlign: "center",
    color: "#00a8ac",
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default Button;
