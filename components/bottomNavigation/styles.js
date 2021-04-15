import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(33, 39, 44)",
  },
  title: {
    color: "rgb(0, 114, 70)",
    alignSelf: "center",
    fontSize: 60,
    paddingTop: 80,
    fontFamily: "AppleSDGothicNeo-UltraLight",
  },
  startTextStyle: {
    color: "#fff",
    alignSelf: "center",
    paddingTop: 100,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 300,
    paddingLeft: 30,
    paddingRight: 30,
  },
  logInButton: {
    height: 40,
    borderRadius: 10,
    width: 150,
    backgroundColor: "rgb(0, 114, 70)",
    justifyContent: "center",
    alignItems: "center",
  },
  signInButton: {
    height: 40,
    borderRadius: 10,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 20,
  },
  bottomNavigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingBottom: 30,
    backgroundColor: "rgb(45, 51, 57)",
  },
  bn1: {
    width: 40,
    height: 40,
    marginTop: 10,
    
  },
  bn2: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  bn3: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  bn4: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
});
