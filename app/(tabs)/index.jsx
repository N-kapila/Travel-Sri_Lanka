import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, Alert } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function HomeScreen() {
  const [location, setLocation] = useState(null); // To store the current location
  const [errorMsg, setErrorMsg] = useState(null);

  const initialRegion = {
    latitude: 7.8731, // Central latitude of Sri Lanka
    longitude: 80.7718, // Central longitude of Sri Lanka
    latitudeDelta: 5.0,
    longitudeDelta: 5.0,
  };

  const touristSpots = [
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      latitude: 7.957,
      longitude: 80.7603,
    },
    {
      id: 2,
      name: "Temple of the Tooth",
      latitude: 7.2932,
      longitude: 80.6385,
    },
    { id: 3, name: "Yala National Park", latitude: 6.3808, longitude: 81.5212 },
    { id: 4, name: "Galle Fort", latitude: 6.0328, longitude: 80.2168 },
    { id: 5, name: "Nuwara Eliya", latitude: 6.9497, longitude: 80.7891 },
    { id: 6, name: "Hikkaduwa", latitude: 6.1406, longitude: 80.1006 },
    { id: 7, name: "Lotus Tower", latitude: 6.9271, longitude: 79.8612 },
    { id: 8, name: "Arugam Bay", latitude: 6.839, longitude: 81.8383 },
    { id: 9, name: "Ella", latitude: 6.8667, longitude: 81.0467 },
    { id: 10, name: "Adam's Peak", latitude: 6.8096, longitude: 80.4999 },
  ];

  useEffect(() => {
    (async () => {
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        Alert.alert(
          "Permission Denied",
          "Enable location services to show your location."
        );
        return;
      }

      // Get the current location
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    })();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#ffffff" }}
      headerImage={
        <Image
          source={require("@/assets/images/image.png")}
          style={styles.coverImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">🙏 Welcome to 🙏</ThemedText>
        <Text style={styles.highlight}>Sri Lanka! 🇱🇰</Text>
      </ThemedView>

      <ThemedView style={styles.mapContainer}>
        <ThemedText type="subtitle">Tourist Spots</ThemedText>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          region={location || initialRegion} // Show current location if available
          showsUserLocation={true} // Enable user location marker
          followsUserLocation={true} // Follow user's location on the map
        >
          {touristSpots.map((spot) => (
            <Marker
              key={spot.id}
              coordinate={{
                latitude: spot.latitude,
                longitude: spot.longitude,
              }}
              title={spot.name}
            />
          ))}
        </MapView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  coverImage: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 8,
  },
  highlight: {
    fontWeight: "bold",
    color: "green",
    fontSize: 50,
  },
  mapContainer: {
    flex: 1,
    height: 400,
  },
  map: {
    flex: 1,
    height: "100%",
  },
});
