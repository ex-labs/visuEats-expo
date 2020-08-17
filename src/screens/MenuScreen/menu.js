import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { MenuCard, MenuItemHeader } from "./../../components";
import firebase from "../../config/firebase/firebase";

class MenuScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  goBack = (props) => {
    props.navigation.navigate("Home");
  };

  slect = () => {
    this.props.navigation.navigate("MenuItem");
  };

  async componentDidMount() {
    let allMenus = [];
    let uid = this.props.route.params.uid;
    firebase
      .database()
      .ref("/")
      .child(`restaurants/${uid}/menus`)
      .on("child_added", (snap) => {
        let data = snap.val();
        let key = snap.key;
        data.uid = key;
        allMenus.push(data);
        this.setState({
          allMenus,
        });
      });
  }

  render() {
    let { allMenus } = this.state;
    return (
      <View style={styles.container}>
        <MenuItemHeader onPress={() => this.goBack(this.props)} />
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {allMenus ? (
              <>
                {allMenus &&
                  allMenus.map((v, i) => {
                    return <MenuCard onPress={this.slect} key={i} data={v} />;
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
