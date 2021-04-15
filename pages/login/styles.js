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
  confirmationButton: {
    height: 40,
    borderRadius: 10,
    width: 300,
    backgroundColor: "rgb(0, 114, 70)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  confirmationButtonText: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 20,
  },
  loginContainer: {
    flexDirection: "column",
    paddingTop: 120,
    alignContent: "center",
  },
  text: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 18,
    paddingLeft: 50,
  },
  inputUser: {
    height: 35,
    borderRadius: 10,
    width: 280,
    paddingHorizontal: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    textAlign: "center",
    alignSelf: "center",
  },
  inputPassword: {
    height: 35,
    borderRadius: 10,
    width: 280,
    paddingHorizontal: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    textAlign: "center",
    alignSelf: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 50,
    paddingTop: 10,
    paddingBottom: 80
  },
  checkbox: {
    alignSelf: "center",
    borderWidth: 1,
    color: "white",
  },
  label: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 20,
    alignSelf: "center",
    paddingTop: 5,
    paddingLeft: 10
  },
  confirmationButton: {
    height: 40,
    borderRadius: 10,
    width: 300,
    backgroundColor: "rgb(0, 114, 70)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  confirmationButtonText: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 20,
  },
  checkBoxStyle: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
  checkedStyle: {
    backgroundColor: "rgb(0, 114, 70)",
  },
  uncheckedStyle: {},
});
