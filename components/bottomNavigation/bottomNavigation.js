import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function BottomNavigation({ navigation }) {
  return (
    <View style={styles.bottomNavigationContainer}>
      <TouchableHighlight onPress={() => navigation.navigate("Home")}>
        <Image style={styles.bn1} source={require("./home.png")} />
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate("Start")}>
        <Image style={styles.bn2} source={require("./schedule.png")} />
      </TouchableHighlight>

      <TouchableHighlight>
        <Image style={styles.bn3} source={require("./information.png")} />
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate("Start")}>
        <Image style={styles.bn4} source={require("./user.png")} />
      </TouchableHighlight>
    </View>
  );
}
