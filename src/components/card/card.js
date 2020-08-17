import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { Rating, AirbnbRating } from "react-native-ratings";

class Card extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: this.props.data && this.props.data.uri,
          }}
        />

        <View style={styles.body}>
          <View>
            <Text style={styles.name}>
              {this.props.data && this.props.data.name}
            </Text>
            <Text style={styles.tagline}>
              {this.props.data && this.props.data.tagline}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={this.props.onPress}
            >
              <Text style={styles.text}>SELECT</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 10 }}>
            <AirbnbRating
              count={5}
              showRating={false}
              defaultRating={this.props.data && this.props.data.rating}
              size={20}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={[styles.text, { color: "#00a8ac", fontSize: 20 }]}>
              {this.props.data && this.props.data.price}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    height: 250,
    backgroundColor: "white",
    borderRadius: 7,
  },

  img: {
    width: "100%",
    height: 140,
  },

  body: {
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00a8ac",
  },
  tagline: {
    color: "#ACACAC",
    fontWeight: "bold",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
  },
  button: {
    backgroundColor: "#00a8ac",
    padding: 5,
    borderRadius: 30,
    width: 60,
    alignSelf: "flex-end",
    marginTop: 20,
  },
});

export default Card;
