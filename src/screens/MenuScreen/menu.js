import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { MenuCard, MenuItemHeader } from "./../../components";
import firebase from "../../config/firebase/firebase";

class MenuScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            logo: null,
        };
    }
    goBack = (props) => {
        props.navigation.navigate("Home");
    };

    select = (productUid, name) => {
        this.props.navigation.navigate("MenuItem", {
            uid: this.state && this.state.uid,
            productUid: productUid,
            name: name,
        });
    };

    async componentDidMount() {
        let allMenus = [];
        let uid = this.props.route.params.uid;
        //get the restaurant data --> to get the logo
        if (!this.props.route.params.logo && this.props.route.params.verified) {
            firebase
                .database()
                .ref("/")
                .child(`restaurants/${uid}`)
                .once(
                    (data) => {
                        this.setState({ logo: data.logo });
                    },
                    (err) => {
                        console.log(err);
                    }
                );
        } else if (this.props.route.params.logo) {
            this.setState({ logo: this.props.route.params.logo });
        }

        firebase
            .database()
            .ref("/")
            .child(`restaurants/${uid}/menus`)
            .on("child_added", (snap) => {
                let data = snap.val();
                let key = snap.key;
                data.productUid = key;
                //console.log("menu data ", data);
                allMenus.push(data);
                this.setState({
                    allMenus,
                    uid,
                });
            });
    }

    render() {
        let { allMenus } = this.state;
        return (
            <View style={styles.container}>
                <MenuItemHeader title={this.props.route.params.name} onPress={() => this.goBack(this.props)} logo={this.state.logo} />
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {allMenus ? (
                            <>
                                {allMenus &&
                                    allMenus.map((v, i) => {
                                        return <MenuCard onPress={() => this.select(v.productUid, v.name)} key={i} data={v} />;
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
        alignItems: "center",
    },
    body: {
        flex: 2.5,
    },
    data: {
        marginVertical: 100,
    },
    menus: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#00a8ac",
    },
});

export default MenuScreen;
