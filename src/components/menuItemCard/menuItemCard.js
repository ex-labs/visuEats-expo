import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

class MenuItemCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Image
            style={styles.img}
            source={{
              uri: this.props.data && this.props.data.image,
            }}
          />
          <View style={{ padding: 10 }}>
            <Text style={styles.text}>{this.props.name}</Text>
            <View style={styles.card_text}>
              <Text>{this.props.price}</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.props.onPress}
              >
                <View style={styles.btn}>
                  <Text style={styles.btn_text}>View Item</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 7,
    paddingBottom: 5,
    marginTop: 10,
  },

  img: {
    width: 320,
    height: 150,
    resizeMode: "stretch",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF8564",
  },
  card_text: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "black",
    width: 70,
    height: 20,
    borderRadius: 20,
    fontSize: 10,
  },
  btn_text: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
  },
});

export default MenuItemCard;
