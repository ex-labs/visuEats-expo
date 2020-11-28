import React from "react";
import { View } from "native-base";
import { StyleSheet, ScrollView, Text } from "react-native";
import { MenuItemCard, MenuItemHeader } from "./../../components";
import firebase from "../../config/firebase/firebase";

class MenuItemScreen extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    async componentDidMount() {
        let allData = [];
        let uid = this.props.route.params.uid;
        let productUid = this.props.route.params.productUid;
        firebase
            .database()
            .ref("/")
            .child(`restaurants/${uid}/menus/${productUid}/items`)
            .on("child_added", (snap) => {
                let data = snap.val();
                let key = snap.key;
                data.uid = key;
                //console.log("menuItem data ", data);
                allData.push(data);
                this.setState({
                    allMenuItems: allData,
                });
            });
    }

    goBack = () => {
        this.props.navigation.navigate("Menu");
    };

    selectItem = (v) => {
        this.props.navigation.navigate("ProductDetail", { data: v });
    };

    render() {
        let { allMenuItems } = this.state;
        return (
            <View style={styles.container}>
                <MenuItemHeader title={this.props.route.params.name} onPress={this.goBack} />
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {allMenuItems ? (
                            <>
                                {allMenuItems &&
                                    allMenuItems.map((v, i) => {
                                        return (
                                            <MenuItemCard
                                                onPress={() => this.selectItem(v)}
                                                key={i}
                                                data={v}
                                                name={v.name}
                                                price={`$${v.price}`}
                                            />
                                        );
                                    })}
                            </>
                        ) : (
                            <View style={styles.data}>
                                <Text style={styles.menus}>Menus Not Found</Text>
                            </View>
                        )}
                    </ScrollView>
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
        flex: 1,
        marginVertical: 10,
    },
});

export default MenuItemScreen;
