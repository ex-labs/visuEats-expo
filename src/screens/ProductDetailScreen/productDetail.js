import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, ScrollView, Alert, Image, Dimensions, AsyncStorage } from "react-native";
import { ProductDetailHeader } from "../../components";
import firebase from "../../config/firebase/firebase";
import { Video } from "expo-av";

const screenWidth = Dimensions.get("window").width;

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
            <View style={{flex: 1}}>
                <ScrollView style={styles.container}>
                    <ProductDetailHeader data={productDetail && productDetail} logout={this.logout} onPress={this.goBack} />
                    <View style={styles.body}>
                        <Text style={styles.title}>{productDetail && productDetail.name}</Text>
                        {/* <Text style={styles.description}>DESCRIPTION</Text> */}
                        <Text style={styles.price}>${productDetail && productDetail.price}</Text>
                        <Text style={styles.info}>{productDetail && productDetail.description}</Text>
                        <Text style={styles.description}>Additional Media</Text>
                        {productDetail && productDetail.video_url ? (
                            <Video
                                source={{ uri: productDetail.video_url }}
                                rate={1.0}
                                volume={1.0}
                                isMuted={true}
                                resizeMode="cover"
                                shouldPlay
                                isLooping
                                style={{ height: 200, borderRadius:10 }}
                            />
                        ) : null}
                    </View>
                    <View style={styles.spacer}></View>
                </ScrollView>
                <View style={styles.fixed}>
                    {/* <Text style={{color: "#fff"}}>Fixed Banner</Text> */}
                    <Image
                        style={styles.img}
                        source={require("../../images/footerbanner.png")}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    fixed: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#0baa96",
        justifyContent: 'center',
        alignItems: "center",
        //alignSelf: 'stretch',
        textAlign: 'center',
        width: screenWidth,
        height: 80,
    },  
    img: {
        width:350,
        height:80
    },
    body: {
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    spacer: {
        width:screenWidth,
        height:100
    },  
    description: {
        color: "#EF9070",
        fontSize: 12,
        //marginVertical: 5,
        fontWeight: "bold",
        marginTop:30,
        marginBottom: 10
    },
    price: {
        color: "#EF9070",
        fontSize: 25,
        marginVertical: 1,
        fontWeight: "bold"
    },
    info: {
        color: "#9C9898",
        textAlign: "justify",
        marginVertical: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginVertical: 5,
    },
});

export default ProductDetailScreen;
