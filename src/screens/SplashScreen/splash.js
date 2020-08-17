import React from "react";
import { View, Text } from "native-base";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class SplashScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={["#8ECA3A", "#1EB060", "#06AA9B"]}
        style={styles.container}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 80, color: "white" }}>U</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
