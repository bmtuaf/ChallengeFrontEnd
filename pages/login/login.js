import React, { useState } from "react";
import { View, Text, SafeAreaView, StatusBar, Keyboard } from "react-native";
import { styles } from "./styles";
import { TextInputMask } from "react-native-masked-text";
import {
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isOperator, setOperator] = useState(false);
  const [checked, setChecked] = React.useState("first");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>LOCALIZA</Text>

        <View style={styles.loginContainer}>
          {!isOperator && (
            <View>
              <Text style={styles.text}>Usuário</Text>
              <TextInputMask
                style={styles.inputUser}
                type={"cpf"}
                placeholder="Ex: 999.999.999-99"
                onChangeText={(user) => setUser(user)}
                value={user}
              />
            </View>
          )}

          {isOperator && (
            <View>
              <Text style={styles.text}>Operador</Text>
              <TextInputMask
                style={styles.inputUser}
                type={"custom"}
                options={{ mask: "SSSSSSSSSS" }}
                placeholder="Id do Operador"
                onChangeText={(user) => setUser(user)}
                value={user}
              />
            </View>
          )}

          <View style={{ paddingTop: 10 }}>
            <Text style={styles.text}>Senha</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.inputPassword}
              onChangeText={(password) => setPassword(password)}
              value={password}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.checkboxContainer}>
        <TouchableHighlight
          style={[
            styles.checkBoxStyle,
            isOperator ? styles.checkedStyle : styles.uncheckedStyle,
          ]}
          onPress={() => {
            setOperator(!isOperator);
          }}
        ></TouchableHighlight>
        <Text style={styles.label}>Operador</Text>
      </View>

      <TouchableHighlight
        style={styles.confirmationButton}
        onPress={() => navigation.navigate("Cars")}
      >
        <Text style={styles.confirmationButtonText}>Confirmar</Text>
      </TouchableHighlight>

      {/* <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.signInButton}
            onPress={() => navigation.navigate("Cars")}
          >
            <Text style={styles.buttonText}>SignIn</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.logInButton}
            onPress={() => navigation.navigate("Cars")}
          >
            <Text style={styles.buttonText}>LogIn</Text>
          </TouchableHighlight>
        </View> */}
    </SafeAreaView>
  );
}
