import { View, Image } from "react-native";
import React from "react";
import NavbarOptions from "../components/NavbarOptions";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  // pushing data to selectors(redux store)
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="p-4 ">
        <Image
          source={{
            uri: "https://www.freepnglogos.com/uploads/uber-logo-png-pic-7.png",
          }}
          resizeMode={"contain"}
          style={{ width: 120, height: 120 }}
        />
        {/* //google places api integration */}
        <GooglePlacesAutocomplete
          placeholder="Where from...?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
              // fontWeight: "bold",
              color: "#3FC060",
              // backgroundColor: "smokewhite",
            },
          }}
          onPress={(data, deatils = null) => {
            dispatch(
              setOrigin({
                location: deatils.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"Search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavbarOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
