import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export default function CarsScreen({ route, navigation }) {
  const [dataSource, setDataSource] = useState([]);
  const rentDates = route.params;

  useEffect(() => {
    fetch(
      "https://rentalapigateway.azurewebsites.net/api/search/vehicles/available",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: rentDates.initialDate,
          endDate: rentDates.endDate,
        }),
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setDataSource(responseJson.availableModels);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const ItemView = (item, key) => {
    return (
      <TouchableOpacity
        key={key}
        style={styles.cardStyle}
        onPress={() => {
          navigation.navigate("CarDetails", {
            item: item,
            totalDays: dateDiffInDays(
              new Date(rentDates.initialDate),
              new Date(rentDates.endDate)
            ),
          });
        }}
      >
        {/* <View > */}
        <Image
          style={styles.carImgStyle}
          source={{
            uri:
              "https://rentalapigateway.azurewebsites.net/api/carmodels/" +
              item.id +
              "/image",
          }}
        />
        <View style={styles.carInfoContainerStyle}>
          <View style={styles.carInfoStyle}>
            <Text style={styles.carNameStyle}>{item.name}</Text>
            <Text style={styles.carMakeStyle}>{item.make.name}</Text>
            <Text style={styles.carCatStyle}>
              {item.vehicleCategory.categoryName}
            </Text>
          </View>
          <View style={styles.carPriceStyle}>
            <Text style={styles.textPrice}>R${item.rentalDailyPrice}/dia</Text>
          </View>
        </View>

        {/* </View> */}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerStyle}>
          <Text style={styles.title}>LOCALIZA</Text>
          {/* <View style={styles.rentHeaderInfo}></View> */}
        </View>
        <Text style={styles.textStyle}>Veículos Disponíveis:</Text>
        {/* List Item as a function */}
        <ScrollView style={styles.carsContainerStyle}>
          {dataSource.map(ItemView)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
