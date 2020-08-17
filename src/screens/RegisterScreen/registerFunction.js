import React from "react";
import { Alert } from "react-native";
import firebase from "../../config/firebase/firebase";

const alreadyLoggedInUser = () => {};

const registerUser = async (name, email, password, confirmPassword) => {
  if (!name || !email || !password || !confirmPassword) {
    Alert.alert("All feilds required");
  } else {
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
          })
          .catch((err) => {
            Alert.alert(err.message);
          });
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  }
};

const loginUser = (email, password) => {
  if (!email || !password) {
    Alert.alert("All feilds required");
  } else {
  }
};

const forgetPassword = (email) => {
  if (!email) {
    Alert.alert("Email is required");
  } else {
  }
};

export { registerUser, loginUser, forgetPassword, alreadyLoggedInUser };
