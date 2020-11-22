import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class BarCodeScannerScreen extends React.Component {
    state = {
        hasPermission: false,
        scanned: false,
    };

    componentDidMount() {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            if (status === "granted") {
                this.setState({ hasPermission: status === "granted" });
            } else {
                this.props.navigation.navigate("Home");
            }
        })();
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true });

        //you can navigate the user
        try {
            this.props.navigation.navigate("Menu", { uid: data });
        } catch {
            alert(`Type ${type} data: ${data}`);
        }
    };

    render() {
        if (this.state.hasPermission === null) {
            return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#000",
                    }}
                >
                    <Text>Requesting for camera permission</Text>
                </View>
            );
        }
        if (this.state.hasPermission === false) {
            return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#000",
                    }}
                >
                    <Text>No access to camera</Text>
                </View>
            );
        }
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    backgroundColor: "#000",
                }}
            >
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate("Home")} style={styles.button}>
                        <MaterialIcons name="arrow-back" style={{ margin: 5 }} size={20} color="white" />
                        <Text style={styles.text}>Back</Text>
                    </TouchableOpacity>
                </View>
                <BarCodeScanner
                    onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
                    style={{ flex: 1, margin: 0, padding: 0 }}
                />

                {this.state.scanned && <Button title={"Tap to Scan Again"} onPress={() => this.setState({ scanned: false })} />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
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
});
