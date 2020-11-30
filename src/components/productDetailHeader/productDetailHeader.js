import React from "react";
import Constants from "expo-constants";
import { ImageBackground, View, Text, StyleSheet, Dimensions, TouchableOpacity, Platform } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

class ProductDetailHeader extends React.Component {
    render() {
        return (
            <View>
                <ImageBackground
                    source={{
                        uri: this.props.data && this.props.data.image,
                    }}
                    style={styles.image}
                >
                    <View style={styles.header}>
                        <View style={{ marginHorizontal: 10 }}>
                            <TouchableOpacity activeOpacity={0.7} onPress={this.props.onPress} style={styles.button}>
                                <MaterialIcons name="arrow-back" style={{ margin: 5 }} size={20} color="white" />
                                <Text style={styles.text}>Back</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <TouchableOpacity activeOpacity={0.7} onPress={this.props.logout} style={[styles.button]}>
                                <Text style={styles.text}>Logout</Text>
                                <AntDesign name="logout" size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: screenWidth,
        height: 400,
    },
    header: {
        paddingTop: Platform.OS === "ios" ? 15 : Constants.statusBarHeight + 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 50
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        color: "white",
        marginRight: 10,
    },
});

export default ProductDetailHeader;
