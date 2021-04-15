import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(33, 39, 44)",
  },
  headerStyle: {
    backgroundColor: "rgb(45, 51, 57)",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  rentHeaderInfo: {
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    width: 330,
    borderRadius: 10,
    backgroundColor: "white",
    alignSelf: "center",
  },
  carImgStyle: {
    borderRadius: 10,
    width: 300,
    height: 130,
    position: "absolute",
  },
  title: {
    color: "rgb(0, 114, 70)",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 12,
    fontSize: 30,
    fontFamily: "AppleSDGothicNeo-Regular",
  },
  carInfoContainerStyle: {
    paddingTop: 135,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  carInfoStyle: {
    width: 100,
  },
  carPriceStyle: {
    width: 150,
  },
  textPrice: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-end",
    paddingRight: 5,
    paddingTop: 15,
  },
  itemStyle: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 15,
  },
  carNameStyle: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 25,
    fontWeight: "bold",
  },
  carMakeStyle: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 15,
    fontWeight: "bold",
  },
  carCatStyle: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 15,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  carsContainerStyle: {
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 130,
  },
  cardStyle: {
    borderRadius: 10,
    margin: 10,
    width: 300,
    height: 208,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    backgroundColor: "rgb(45, 51, 57)",
    alignSelf: "center",
  },
});
