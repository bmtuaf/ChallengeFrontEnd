import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(33, 39, 44)",
  },
  text: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 15,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
    borderRadius: 10,
  },
  rentInfo: {
    padding: 10,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 420,
    borderRadius: 10,
    backgroundColor: "rgb(45, 51, 57)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  rentInfoLabel: {
    color: "#fff",
    marginLeft: 20,
    marginTop: 50,
    fontWeight: "bold",
  },
  title: {
    color: "rgb(0, 114, 70)",
    marginLeft: 12,
    fontSize: 50,
    fontFamily: "AppleSDGothicNeo-UltraLight",
  },
  inputDate: {
    height: 30,
    borderRadius: 10,
    width: 135,
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
  },
  rentDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  confirmationButton: {
    height: 40,
    borderRadius: 10,
    width: 300,
    backgroundColor: "rgb(0, 114, 70)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10
  },
  confirmationButtonText: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 20,
  },
});
