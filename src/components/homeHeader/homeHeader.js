import React from "react";
import { View, Text, Button, Icon } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Constants from "expo-constants";

import { IconInput } from "../";

class HomeHeader extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <View
                    style={{
                        marginTop: Platform.OS === "ios" ? 15 : Constants.statusBarHeight + 15,
                        marginBottom: 15,
                        marginHorizontal: "5%",
                    }}
                >
                   { /* <TouchableOpacity activeOpacity={0.7} onPress={this.props.onPress} style={styles.button}>
                        <Text style={styles.text}>Logout</Text>
                        <AntDesign name="logout" size={20} color="white" />
                    </TouchableOpacity> */ }
                </View>
                <IconInput onChange={this.props.onSearch} placeholder="Search for your restaurant by name" name="search" />
                <IconInput onChange={this.props.onSearch} placeholder="Search for your restaurant by name" name="search" />
                <View style ={{ flexDirection: "row", flexWrap:"wrap", width: "92%", justifyContent: "justify", alignItems: "center", marginRight:17}}>
                    <Button onPress={this.props.qrCodeButtonPress} iconLeft style={styles.qrBtn}>
                        <Icon name="eye" />
                        <Text>Scan QR code</Text>
                    </Button>
                    <Button onPress={this.props.qrCodeButtonPress} iconLeft style={styles.locBtn}>
                        <Icon name="navigate" />
                        <Text>Use Your Location</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00a8ac",
        alignItems: "flex-end",
        paddingBottom: 15,
        paddingTop: 30
    },
    title: {
        margin: 15,
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
    },
    inputContainer: {
        flex: 1,
        marginTop: 20,
    },
    button: {
        flexDirection: "row",
    },
    qrBtn: {
        textAlign: "center",
        backgroundColor: "#B2D234",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
        marginRight: 2,
        width: "48%",
    },
    locBtn: {
        textAlign: "center",
        backgroundColor: "#ff0000",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
        marginRight: 2,
        width: "48%",
    },
    text: {
        fontWeight: "bold",
        color: "white",
        marginRight: 10,
    },
});

export default HomeHeader;
