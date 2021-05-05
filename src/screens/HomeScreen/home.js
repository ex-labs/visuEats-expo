import React from "react";
import { View, Text, Button, Icon } from "native-base";
import { StyleSheet, ScrollView, AsyncStorage, Alert } from "react-native";
import { HomeHeader, RestaurantCard } from "../../components";
import { AntDesign } from "@expo/vector-icons";
import firebase from "../../config/firebase/firebase";

class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            searchQuery: "",
        };
    }

    getdata = () => {
        console.log('here');
        let allRestaurants = [];
        firebase
            .database()
            //.ref("/")
            .ref("/restaurants")
            .on('child_added', (snap) => {
                console.log('trigger')
                let data = snap.val();
                let key = snap.key;
                data.uid = key;
                allRestaurants.push(data);
                //let newrest = allRestaurants.filter((item) => {
                    //return item.archived == false
                //})
                console.log('triggered')
                this.setState({
                    //allRestaurants: newrest,
                    allRestaurants,
                });
            });
    }

    updatedata = () => {
        console.log('here1');
        let allRestaurants = [];
        firebase
            .database()
            .ref("/")
            .child("restaurants").on('child_updated', (snap) => {
                //this.getdata();
            });
    }

    async componentDidMount() {
        let user = await AsyncStorage.getItem("token");
        user = JSON.parse(user);
        this.setState({
            userUid: user,
        });
        this.getdata();
        //this.updatedata();
    }

    select = (data) => {
        let { userUid } = this.state;
        firebase
            .database()
            .ref("/")
            .child(`users/${userUid}/recents/${data.uid}`)
            .set(data)
            .then(() => {
                this.props.navigation.navigate("Menu", { uid: data.uid, logo: data.logo, verified: true, name: data.name });
            })
            .catch((err) => {
                Alert.alert(err.message);
            });
    };

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
        let { allRestaurants, searchQuery } = this.state;


        console.log(allRestaurants);
        return (
            <View style={styles.container}>
                <HomeHeader
                    onSearch={(e) => {
                        this.setState({ searchQuery: e.nativeEvent.text });
                    }}
                    qrCodeButtonPress={() => {
                        this.props.navigation.navigate("BarCodeScanner");
                    }}
                    onPress={this.logout}
                />
                <ScrollView>
                    <View style={styles.body}>
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={styles.title}>Start your unique visual experience</Text>
                            <Text style={styles.info}>Find restaurants and start browse their menus</Text>
                            <Button small style={styles.btn} onPress={() => this.getdata()} iconLeft>
                                <Icon style={styles.icon} name="refresh" />
                                <Text style={styles.btntxt}>Reload Restaurants</Text>
                            </Button>
                        </View>

                        <View>
                            {allRestaurants &&
                                allRestaurants
                                    .filter((e) => e.name.toUpperCase().indexOf(searchQuery.toUpperCase()) > -1)
                                    .map((v, i) => {
                                        if(v.archived) {
                                            return null
                                        }
                                        return <RestaurantCard onPress={() => this.select(v)} key={i} data={v} />;
                                    })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        justifyContent: "center",
        paddingVertical: 10,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#00a8ac",
        textAlign: 'center'
    },
    info: {
        fontSize: 12,
        color: "#00a8ac",
        textAlign: 'center'
    },
    btn: {
        marginTop: 10,
        alignSelf: "center",
        backgroundColor: "#B2D234",
    },
    btntxt: {
        fontSize: 12,
        color: "white"
    },
    icon: {
        color:"white"
    }
});

export default HomeScreen;
