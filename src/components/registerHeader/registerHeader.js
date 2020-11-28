import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, Image } from "react-native";

class RegisterHeader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require("../../images/ve_light.png")} style={styles.image} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00a8ac",
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        width: 200,
        resizeMode: "contain",
        marginTop: 20,
    },

    title: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default RegisterHeader;
