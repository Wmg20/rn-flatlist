import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";
import { Selectorigin } from "../slices/navSlice";

const NavbarOptions = () => {
  const data = [
    {
      id: "1",
      title: "Get a ride",
      icon: "arrow-forward-circle",
      image:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png",
      screen: "MapScreen",
    },
    {
      id: "2",
      title: "Order food",
      icon: "arrow-forward-circle",
      image:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png",
      screen: "EatScreen",
    },
  ];

  // using naviation hooks
  const navigation = useNavigation();

  //pulling selector - for disabeling tap actions if no origin selected
  const origin = useSelector(Selectorigin);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            className=" bg-gray-100 p-4 m-2 w-40 rounded-sm"
            //disabled if no origin is slected
            // disabled={!origin}
          >
            <View
            //disabled styling
            // className={`${!origin && "opacity-20"}`}
            >
              <Image
                source={{ uri: item.image }}
                resizeMode={"contain"}
                style={{ width: 120, height: 120 }}
              />
              <Text className=" text-lg font-medium">{item.title}</Text>
              <Icon
                name={item.icon}
                size={36}
                color={"black"}
                style={{ marginTop: 8 }}
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavbarOptions;
