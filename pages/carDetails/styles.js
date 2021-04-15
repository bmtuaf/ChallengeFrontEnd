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
  carImgStyle: {
    borderRadius: 30,
    width: 380,
    height: 180,
  },
  headerImageStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    marginBottom: 30,
  },
  carNameTextStyle: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "AppleSDGothicNeo-Regular",
    paddingLeft: 15,
    marginBottom: 15,
  },
  carPriceTextStyle: {
    color: "rgb(0, 114, 70)",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "AppleSDGothicNeo-Regular",
    paddingRight: 15,
    marginBottom: 15,
    alignSelf: "flex-end",
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    fontFamily: "AppleSDGothicNeo-Regular",
    paddingLeft: 15,
    paddingBottom: 5,
  },
  carDetailsHeaderStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  carNameStyle: {
    width: "40%",
  },
  carPriceStyle: {
    width: "60%",
  },
  confirmationButtonText: {
    color: "white",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: 20,
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
  carInfoContainer: {
    marginBottom: 150,
  },
  totalContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 100,
    paddingHorizontal: 15
  },
  totalTextStyle: {
    color: "white",
    fontSize: 25,
    fontFamily: "AppleSDGothicNeo-Regular",
  },
  totalPriceTextStyle: {
    color: "rgb(0, 114, 70)",
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: "AppleSDGothicNeo-Regular",
  },
});
