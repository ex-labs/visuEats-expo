import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";

class CustomInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.SectionStyle}>
          <Icon
            style={styles.icon}
            name={this.props.name}
            size={20}
            color="#0ABAB5"
          />
          <TextInput
            placeholder={this.props.placeholder}
            style={{ flex: 1 }}
            underlineColorAndroid="transparent"
            placeholderTextColor="#00a8ac"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 35,
    borderRadius: 5,
    margin: 10,
  },

  icon: {
    margin: 10,

    alignItems: "center",
    backgroundColor: "white",
  },
});

export default CustomInput;
