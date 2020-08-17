import React from "react";

import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

class ProductDetailHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../images/product.png")}
          style={styles.image}
        >
          <View style={styles.header}>
            <View style={{ marginVertical: 30, marginHorizontal: 10 }}>
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
            <View style={{ marginVertical: 30, marginHorizontal: 10 }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.props.logout}
                style={[styles.button]}
              >
                <Text style={styles.text}>Logout</Text>
                <AntDesign name="logout" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: screenWidth,
    height: 240,
  },
  header: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    marginRight: 10,
  },
});

export default ProductDetailHeader;
