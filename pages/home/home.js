import React, { useState } from "react";
import { View, Text, SafeAreaView, StatusBar, Keyboard } from "react-native";
import { styles } from "./styles";
import { TextInputMask } from "react-native-masked-text";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import BottomNavigation from "../../components/bottomNavigation/bottomNavigation";

export default function HomeScreen({ navigation }) {
  const [initialDate, setInitialDT] = useState("");
  const [endDate, setEndDT] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>LOCALIZA</Text>

        <Text style={styles.rentInfoLabel}>
          Selecione a data que você deseja alugar o carro:
        </Text>

        <View style={styles.rentInfo}>
          <View style={styles.rentDate}>
            <Text style={styles.text}>Data Inicial</Text>
            <TextInputMask
              style={styles.inputDate}
              type={"datetime"}
              placeholder="AAAA-MM-DD"
              options={{
                format: "YYYY-MM-DD",
              }}
              onChangeText={(initialDate) => setInitialDT(initialDate)}
              value={initialDate}
            />
          </View>

          <View style={{ paddingTop: 5 }}>
            <View style={styles.rentDate}>
              <Text style={styles.text}>Data Final</Text>
              <TextInputMask
                style={styles.inputDate}
                type={"datetime"}
                placeholder="AAAA-MM-DD"
                options={{
                  format: "YYYY-MM-DD",
                }}
                onChangeText={(endDate) => setEndDT(endDate)}
                value={endDate}
              />
            </View>
          </View>
        </View>

        <TouchableHighlight
          style={styles.confirmationButton}
          onPress={() =>
            initialDate != "" && endDate != ""
              ? navigation.navigate("Cars", {
                  initialDate: initialDate,
                  endDate: endDate,
                })
              : console.log("Date is empty")
          }
        >
          <Text style={styles.confirmationButtonText}>Confirmar</Text>
        </TouchableHighlight>
      </TouchableWithoutFeedback>
      {/* <BottomNavigation navigation={navigation} /> */}
    </SafeAreaView>
  );
}
