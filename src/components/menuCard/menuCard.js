import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";

let Width = Dimensions.get("window").width;

export default class MenuCard extends React.Component {
  render() {
    return (
      <ImageBackground
        source={{ uri: this.props.data && this.props.data.image }}
        style={styles.image}
      >
        <View style={styles.cardBody}>
          <View>
            <Text style={styles.text}>
              {this.props.data && this.props.data.name}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={this.props.onPress}
          >
            <Text style={styles.name}>SELECT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: Width,
    opacity: 0.8,
    height: 150,
  },

  cardBody: {
    flex: 1,
    backgroundColor: "#97422c",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 30,
    padding: 5,
    width: 70,
    marginVertical: 20,
  },
  name: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});