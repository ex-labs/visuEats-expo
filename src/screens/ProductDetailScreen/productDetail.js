import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, ScrollView, Alert, AsyncStorage } from "react-native";
import { ProductDetailHeader } from "../../components";
import firebase from "../../config/firebase/firebase";

class ProductDetailScreen extends React.Component {
  goBack = () => {
    this.props.navigation.navigate("MenuItem");
  };

  // logout

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        AsyncStorage.removeItem("token");
        this.props.navigation.navigate("Register");
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <ProductDetailHeader logout={this.logout} onPress={this.goBack} />
        <View style={styles.body}>
          <Text style={styles.title}>APPETIZER NAME</Text>
          <Text style={styles.description}>DESCRIPTION</Text>
          <Text style={styles.info}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
          <Text style={styles.description}>$25</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 2,
    marginHorizontal: 15,
  },
  description: {
    color: "red",
    fontSize: 17,
    marginVertical: 10,
  },
  info: {
    color: "#CECACA",
    textAlign: "justify",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
