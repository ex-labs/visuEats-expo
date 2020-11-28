import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

class MenuItemCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={{
                        uri: this.props.data && this.props.data.image,
                    }}
                />
                <View style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
                    <Text style={styles.text}>{this.props.name}</Text>
                    <View style={styles.card_text}>
                        <Text>{this.props.price}</Text>
                        <TouchableOpacity style={styles.btn} activeOpacity={0.6} onPress={this.props.onPress}>
                            <Text style={styles.btn_text}>View Item</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
        backgroundColor: "white",
        borderRadius: 7,
        paddingBottom: 5,
        overflow: "hidden",
    },
    img: {
        height: 150,
        resizeMode: "cover",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FF8564",
    },
    card_text: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    btn: {
        backgroundColor: "black",
        paddingVertical: 7.5,
        paddingHorizontal: 12.5,
        borderRadius: 20,
        fontSize: 10,
    },
    btn_text: {
        color: "white",
        textAlign: "center",
        fontSize: 12,
    },
});

export default MenuItemCard;
