import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
// import RideOptionsCard from "../components/RideOptionsCard";

const NavigateCard = () => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1 ">
      <Text className="  text-center text-xl">Good Morning, Ved</Text>
      <View className=" flex-shrink border-t border-gray-100 mt-4">
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to...?"
            styles={toInputBoxStyles}
            returnKeyType={"Search"}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  //from api and redux
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
