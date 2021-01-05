import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, ScrollView, Alert, TouchableOpacity } from "react-native";
import { RegisterHeader, Button, Input } from "../../components";
import firebase from "../../config/firebase/firebase";

class ForgetScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      loading: false,
    };
  }

  // back to register

  backtologin = () => {
    this.props.navigation.navigate("Register");
  };

  handelReset = async () => {
    let { email } = this.state;
    if (!email) {
      Alert.alert("Email is required");
    } else {
      this.setState({
        loading: true,
      });
      await firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          this.setState({
            loading: false,
            email: "",
          });
          Alert.alert("Email sent on your account");
          this.props.navigation.navigate("Register");
        })
        .catch((err) => {
          this.setState({
            loading: false,
          });
          Alert.alert(err.message);
        });
    }
  };

  render() {
    let { email, loading } = this.state;
    return (
      <View style={styles.container}>
        <RegisterHeader />
        <ScrollView>
          <View style={styles.body}>
            <View>
              <Text style={styles.info}>
                By continuing, you agree to visuEats' Terms of Service and
                acknowledge visuEats' Privacy Policy.
              </Text>
            </View>
            <View>
              <Input
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState({
                    email: text,
                  });
                }}
                value={email}
                title="Email"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                backgroundColor="#00a8ac"
                onPress={this.handelReset}
                name={loading ? "Loading..." : "RESET PASSWORD"}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={this.backtologin}>
                    <Text style={[styles.info, { marginTop: 10, textAlign: "center" }]}>
                      Return to Login/Signup
                    </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    justifyContent: "center",
    marginHorizontal: 30,
    marginVertical: 30,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#00a8ac",
  },
  info: {
    fontSize: 14,
    color: "#00a8ac",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "center",
  },
});

export default ForgetScreen;
