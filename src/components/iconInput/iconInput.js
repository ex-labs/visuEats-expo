import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";

class CustomInput extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.SectionStyle}>
                    <Icon style={styles.icon} name={this.props.name} size={15} color="#0ABAB5" />
                    <TextInput
                        onChange={this.props.onChange}
                        placeholder={this.props.placeholder}
                        onBlur={this.props.onBlur}
                        onFocus={this.props.onFocus}
                        style={{ flex: 1 }}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#00a8ac"
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        marginHorizontal: "5%",
        marginBottom: 10,
    },

    SectionStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        height: 35,
        borderRadius: 5,
    },

    icon: {
        margin: 10,

        alignItems: "center",
        backgroundColor: "white",
    },
});

export default CustomInput;
