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
        <View style={styles.titleView}>
          <Text style={styles.title}>Chippies</Text>
          <Text style={styles.devnote}>*DEV: Props pass Restaurant.Logo/Title here</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#000000",
    height: 0,
    width: Width,
    flexDirection: "row",
  },
  titleView: {
    flex: 0,
    backgroundColor: "#000",
    //flexDirection: "row",
    //height: 0
  },  
  title: {
    marginBottom: 0,
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
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
  devnote: {
    textAlign: "center",
    color: "white",
    fontSize:10,
    marginBottom:10
  }
});

export default HomeHeader;
