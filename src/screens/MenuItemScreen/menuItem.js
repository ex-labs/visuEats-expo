import React from "react";
import { View } from "native-base";
import { StyleSheet, ScrollView } from "react-native";
import { MenuItemCard, MenuItemHeader } from "./../../components";

const dummyData = [
  {
    uri:
      "https://restaurantengine.com/wp-content/uploads/2015/05/startup-restaurants-typically-overspend.jpg",
  },
  {
    uri:
      "https://restaurantengine.com/wp-content/uploads/2015/05/startup-restaurants-typically-overspend.jpg",
  },
  {
    uri:
      "https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Middle-Eastern-Shakshuka-CMS.jpg",
  },
  {
    uri:
      "https://b.zmtcdn.com/data/pictures/chains/7/18717467/e107053b2f6ebfc575913ceb643d5eaa.jpg",
  },
];
class MenuItemScreen extends React.Component {
  goBack = () => {
    this.props.navigation.navigate("Menu");
  };

  selectItem = () => {
    this.props.navigation.navigate("ProductDetail");
  };
  render() {
    return (
      <View style={styles.container}>
        <MenuItemHeader onPress={this.goBack} />
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {dummyData &&
              dummyData.map((v, i) => {
                return (
                  <MenuItemCard
                    onPress={this.selectItem}
                    key={i}
                    data={v}
                    name="APPETIZER NAME"
                    price="$00.00"
                  />
                );
              })}
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
});

export default MenuItemScreen;
