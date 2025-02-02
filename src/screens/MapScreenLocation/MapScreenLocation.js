import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

const MapScreenLocation = () => {
  const { params } = useRoute();
  const markerPosition = params?.coordinates || null;
  console.log(markerPosition);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        zoomEnabled={true}
        region={{
          latitude: markerPosition.latitude || 37.78825,
          longitude: markerPosition.longitude || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
      >
        {markerPosition && (
          <Marker
            title="I am here"
            coordinate={{
              latitude: markerPosition.latitude || 37.78825,
              longitude: markerPosition.longitude || -122.4324,
            }}
            description="Location"
          />
        )}
      </MapView>
    </View>
  );
};

export default MapScreenLocation;

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
