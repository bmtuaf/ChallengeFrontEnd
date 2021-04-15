import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function CarDetailsScreen({ route, navigation }) {
  const { item } = route.params;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingBottom: insets.bottom,
        flex: 1,
        backgroundColor: "rgb(33, 39, 44)",
      }}
    >
      <View style={styles.headerImageStyle}>
        <Image
          style={styles.carImgStyle}
          source={{
            uri:
              "https://rentalapigateway.azurewebsites.net/api/carmodels/" +
              item.id +
              "/image",
          }}
        />
      </View>
      {/* <View style={styles.container}> */}
      <View>
        <View style={styles.carDetailsHeaderStyle}>
          <View style={styles.carNameStyle}>
            <Text style={styles.carNameTextStyle}>{item.name}</Text>
          </View>
          <View style={styles.carPriceStyle}>
            <Text style={styles.carPriceTextStyle}>
              R${item.rentalDailyPrice}/dia
            </Text>
          </View>
        </View>

        <View style={styles.carInfoContainer}>
          <Text style={styles.textStyle}>Marca: {item.make.name}</Text>
          <Text style={styles.textStyle}>
            Categoria: {item.vehicleCategory.categoryName}
          </Text>
          <Text style={styles.textStyle}>
            Combustível: {item.fuelType.fuelTypeName}
          </Text>
          <Text style={styles.textStyle}>
            {item.trunkLimit} Mala(s) Grande(s)
          </Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalTextStyle}>
              Valor total para {route.params.totalDays} dias:
            </Text>

            <View>
              <Text style={styles.totalPriceTextStyle}>
                R${route.params.totalDays * item.rentalDailyPrice}
              </Text>
            </View>
          </View>
        </View>

        <TouchableHighlight
          style={styles.confirmationButton}
          onPress={() => console.log("Rent Car")}
        >
          <Text style={styles.confirmationButtonText}>Confirmar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
