import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

const MapScreen = () => {
  const [map, setMap] = useState({
    location: null,
    errorMsg: null,
    markerPosition,
  });

  const handleMapState = (name, value) => {
    setMap((prevMap) => ({
      ...prevMap,
      [name]: value,
    }));
  };

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        handleMapState("errorMsg", "Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("Retrieved location:", location);
      handleMapState("location", location);
    }

    getCurrentLocation();
  }, []);

  let text = "Waiting...";
  if (map.errorMsg) {
    text = map.errorMsg;
    console.log(text);
  } else if (map.location) {
    text = JSON.stringify(map.location);
    const { latitude, longitude } = map.location.coords;
    console.log(latitude, longitude);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        zoomEnabled={true}
        region={
          map.location
            ? {
                latitude: map.location.coords.latitude,
                longitude: map.location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
            : {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
        }
        mapType="standard"
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
        onLongPress={(e) => {
          let marker = e.nativeEvent.coordinate;
          console.log(marker);
          handleMapState("markerPosition", marker);
        }}
      >
        <Marker
          title="I am here"
          coordinate={
            map.markerPosition
              ? map.markerPosition
              : {
                  latitude: map.location?.coords?.latitude || 37.78825,
                  longitude: map.location?.coords?.longitude || -122.4324,
                }
          }
          description="My current location"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
