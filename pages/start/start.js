import React, { useState } from "react";
import { View, Text, SafeAreaView, StatusBar, Keyboard } from "react-native";
import { styles } from "./styles";
import { TextInputMask } from "react-native-masked-text";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export default function StartScreen({ navigation }) {
  //const [initialDate, setInitialDT] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>LOCALIZA</Text>

        <Text style={styles.startTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu purus
          eget dui porta efficitur ut sit amet dui. Integer in egestas est.
          Mauris viverra ultrices vestibulum. Aliquam erat volutpat.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.signInButton}
            onPress={() => navigation.navigate("Cars")}
          >
            <Text style={styles.buttonText}>SignIn</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.logInButton}
            onPress={() => navigation.navigate("LogIn")}
          >
            <Text style={styles.buttonText}>LogIn</Text>
          </TouchableHighlight>
        </View>
      {/* </TouchableWithoutFeedback> */}
    </SafeAreaView>
  );
}
