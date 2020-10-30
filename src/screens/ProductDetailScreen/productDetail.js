import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, ScrollView, Alert, AsyncStorage } from "react-native";
import { ProductDetailHeader } from "../../components";
import firebase from "../../config/firebase/firebase";

class ProductDetailScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  goBack = () => {
    this.props.navigation.navigate("MenuItem");
  };

  async componentDidMount() {
    let productDetail = await this.props.route.params.data;
    this.setState({
      productDetail,
    });
  }

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
    let { productDetail } = this.state;
    return (
      <View style={styles.container}>
        <ProductDetailHeader
          data={productDetail && productDetail}
          logout={this.logout}
          onPress={this.goBack}
        />
        <View style={styles.body}>
          <Text style={styles.title}>
            {productDetail && productDetail.name}
          </Text>
          <Text style={styles.description}>DESCRIPTION</Text>
          <Text style={styles.info}>
            {productDetail && productDetail.description}
          </Text>
          <Text style={styles.description}>
            $ {productDetail && productDetail.price}
          </Text>
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
