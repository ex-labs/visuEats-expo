import React from "react";
import { View, Text } from "native-base";
import {
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { RegisterHeader, Button, Input, IconButton } from "../../components";

import firebase from "../../config/firebase/firebase";

class RegisterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
      loginColor: "#00a8ac",
      signupColor: "#6FBFC1",
      login: true,
      loading: false,
    };
  }

  // check if user already exists or not

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate("Home");
      }
    });
  }

  // Login
  showlogin = () => {
    this.setState({
      loginColor: "#00a8ac",
      signupColor: "#6FBFC1",
      login: true,
    });
  };

  // Signup
  showsignup = () => {
    this.setState({
      signupColor: "#00a8ac",
      loginColor: "#6FBFC1",
      login: false,
    });
  };

  // forget

  forget = () => {
    this.props.navigation.navigate("Forget");
  };

  // Handel Signup

  registerUser = async () => {
    let { name, email, password, confirmPassword } = this.state;
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("All feilds required");
    } else if (password != confirmPassword) {
      Alert.alert("Password not match");
    } else {
      this.setState({
        loading: true,
      });
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((firebaseUser) => {
          let data = {
            name,
            email,
            uid: firebaseUser.user.uid,
          };
          firebase
            .database()
            .ref("/")
            .child(`users/${firebaseUser.user.uid}`)
            .set(data)
            .then((res) => {
              Alert.alert("user added");
              this.setState({
                loading: false,
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
            })
            .catch((err) => {
              Alert.alert(err.message);
            });
        })
        .catch((err) => {
          Alert.alert(err.message);
          this.setState({
            loading: false,
          });
        });
    }
  };

  // Loginuser

  loginUser = async () => {
    let { email, password } = this.state;

    if (!email || !password) {
      Alert.alert("all feilds required");
    } else {
      this.setState({
        loading: true,
      });
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((firebaseUser) => {
          AsyncStorage.setItem(
            "token",
            JSON.stringify(firebaseUser.user.uid)
          ).then(() => {
            this.setState({
              loading: false,
              email: "",
              password: "",
            });
            this.props.navigation.navigate("Home");
          });
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
    let {
      signupColor,
      loginColor,
      login,
      name,
      email,
      password,
      confirmPassword,
      loading,
    } = this.state;
    return (
      <View style={styles.container}>
        <RegisterHeader />
        <ScrollView>
          <View style={styles.body}>
            {login ? (
              <View>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.info}>
                  By continuing, you agree to visuEats` Terms of Service and
                  acknowledge vishuEats` Privacy Policy.
                </Text>
              </View>
            ) : (
              <View>
                <Text style={styles.title}>SIGN UP</Text>
                <Text style={styles.info}>
                  By continuing, you agree to visuEats` Terms of Service and
                  acknowledge vishuEats` Privacy Policy.
                </Text>
              </View>
            )}

            <View style={styles.buttonContainer}>
              <Button
                onPress={this.showlogin}
                backgroundColor={loginColor}
                name="LOGIN"
              />
              <Button
                onPress={this.showsignup}
                backgroundColor={signupColor}
                name="SIGNUP"
              />
            </View>

            <View>
              {login ? (
                <>
                  <Input
                    underlineColorAndroid="transparent"
                    onChangeText={(text) =>
                      this.setState({
                        email: text,
                      })
                    }
                    title="Email"
                    value={email}
                  />
                  <Input
                    underlineColorAndroid="transparent"
                    onChangeText={(text) =>
                      this.setState({
                        password: text,
                      })
                    }
                    title="Password"
                    password={true}
                    value={password}
                  />
                  <TouchableOpacity activeOpacity={0.8} onPress={this.forget}>
                    <Text style={[styles.info, { marginTop: 10 }]}>
                      Forget Password?
                    </Text>
                  </TouchableOpacity>
                  <IconButton
                    onPress={this.loginUser}
                    name={loading ? "Loading.." : "Login"}
                  />
                </>
              ) : (
                <>
                  <Input
                    underlineColorAndroid="transparent"
                    onChangeText={(text) =>
                      this.setState({
                        name: text,
                      })
                    }
                    title="Full Name"
                    value={name}
                  />
                  <Input
                    underlineColorAndroid="transparent"
                    onChangeText={(text) =>
                      this.setState({
                        email: text,
                      })
                    }
                    title="Email"
                    value={email}
                  />
                  <Input
                    underlineColorAndroid="transparent"
                    onChangeText={(text) =>
                      this.setState({
                        password: text,
                      })
                    }
                    title="Create Password"
                    password={true}
                    value={password}
                  />
                  <Input
                    password={true}
                    underlineColorAndroid="transparent"
                    onChangeText={this.handlePassword}
                    title="Re-Enter Password"
                    onChangeText={(text) =>
                      this.setState({
                        confirmPassword: text,
                      })
                    }
                    value={confirmPassword}
                  />
                  <Text style={[styles.info, { marginTop: 10 }]}>
                    Already have an account? Sign In
                  </Text>

                  <IconButton
                    onPress={this.registerUser}
                    name={loading ? "Loading.." : "Continue"}
                  />
                </>
              )}
            </View>
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
  },
  forget: {
    color: "#00a8ac",
    fontSize: 14,
  },
});

export default RegisterScreen;
