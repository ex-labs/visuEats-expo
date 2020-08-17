import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.props.onPress}
        style={[
          styles.button,
          {
            backgroundColor:
              this.props.backgroundColor && this.props.backgroundColor,
          },
        ]}
      >
        <Text style={styles.text}>{this.props.name && this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    padding: 15,
    backgroundColor: "#6FBFC1",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});

export default Button;
