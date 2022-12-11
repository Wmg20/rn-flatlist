import { View, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { Selectorigin } from "../slices/navSlice";

const Map = () => {
  //pulling data from store (redux store)
  const origin = useSelector(Selectorigin);
  return (
    <MapView
      className=" flex-1"
      mapType="mutedStandard"
      initialRegion={{
        latitude: 25.4358,
        // latitude: origin.location.lat,
        longitude: 81.8463,
        // longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        //pass the same origin data
        <Marker
          key={origin.index}
          coordinate={{ latitude: 25.4358, longitude: 81.8463 }}
          title={origin.title}
          description={origin.description}
        />
      )}
    </MapView>
  );
};

export default Map;
