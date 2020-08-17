import React from "react";

import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";

export default class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  // Dashboard

  moveOnDashboard = () => {
    this.props.navigation.navigate("Main");
  };

  onIndexChanged = (index) => {
    if (index == 2) {
      this.props.navigation.navigate("Register");
    } else {
      this.setState({
        animatable_singup: null,
        animatable_login: null,
        show: false,
      });
    }
  };
  render() {
    return (
      <Swiper
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activedot} />}
        onIndexChanged={(index) => this.onIndexChanged(index)}
      >
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require("../../images/path_260.png")}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Find your restaurent</Text>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </Text>
          </View>
        </View>

        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require("../../images/path_255.png")}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>View restaurent menu</Text>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </Text>
          </View>
        </View>

        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require("../../images/path_281.png")}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Place an order with your Waiter</Text>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </Text>
          </View>
        </View>
      </Swiper>
    );
  }
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#00a8ac",
  },
  text: {
    color: "#00a8ac",
    textAlign: "center",
    marginVertical: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#6FBFC1",
    marginHorizontal: 5,
    marginVertical: 3,
  },
  activedot: {
    backgroundColor: "#00a8ac",
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  container: {
    flexDirection: "row",
  },

  button: {
    width: width - 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  signupText: {
    color: "#3465d9",
  },
  loginText: {
    color: "white",
  },
});
