import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, ScrollView, Alert, AsyncStorage } from "react-native";
import { ProductDetailHeader } from "../../components";
import firebase from "../../config/firebase/firebase";
import { Video } from "expo-av";

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

        console.log(productDetail);

        return (
            <ScrollView style={styles.container}>
                <ProductDetailHeader data={productDetail && productDetail} logout={this.logout} onPress={this.goBack} />
                <View style={styles.body}>
                    <Text style={styles.title}>{productDetail && productDetail.name}</Text>
                    <Text style={styles.description}>DESCRIPTION</Text>
                    <Text style={styles.info}>{productDetail && productDetail.description}</Text>
                    <Text style={styles.description}>$ {productDetail && productDetail.price}</Text>
                    {productDetail && productDetail.video_url ? (
                        <Video
                            source={{ uri: productDetail.video_url }}
                            rate={1.0}
                            volume={1.0}
                            isMuted={true}
                            resizeMode="cover"
                            shouldPlay
                            isLooping
                            style={{ height: 200 }}
                        />
                    ) : null}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        paddingVertical: 20,
        paddingHorizontal: 30,
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
        fontSize: 22,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginVertical: 5,
    },
});

export default ProductDetailScreen;
