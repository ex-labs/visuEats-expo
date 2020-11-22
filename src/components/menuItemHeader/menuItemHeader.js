import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const Width = Dimensions.get("window").width;

class HomeHeader extends React.Component {
    render() {
        return (
            <View
                style={{
                    height: this.props.logo ? 220 : 150,
                    backgroundColor: "#000",
                }}
            >
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.7} onPress={this.props.onPress} style={styles.button}>
                        <MaterialIcons name="arrow-back" style={{ margin: 5 }} size={20} color="white" />
                        <Text style={styles.text}>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleView}>
                    {this.props.logo ? <Image style={{ height: 35, width: 35 }} source={{ uri: this.props.logo }}></Image> : null}
                    <Text style={styles.title}>Chippies</Text>
                    <Text style={styles.devnote}>*DEV: Props pass Restaurant.Logo/Title here</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: Width,
        flexDirection: "row",
    },
    titleView: {
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 10,
        //flexDirection: "row",
        //height: 0
    },
    title: {
        marginBottom: 0,
        fontSize: 40,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        flexDirection: "row",
        paddingTop: 30,
    },
    text: {
        fontWeight: "bold",
        color: "white",
        margin: 5,
    },
    devnote: {
        textAlign: "center",
        color: "white",
        fontSize: 10,
        marginBottom: 10,
    },
});

export default HomeHeader;
