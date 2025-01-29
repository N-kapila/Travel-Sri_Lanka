import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // For gradient button background

const attractions = [
  "Sigiriya",
  "Hikka",
  "Lotus Tower",
  "Diyaluma",
  "Jaffna",
  "Nuwara Eliya",
  "Riverston",
  "Ella",
  "Galle Fort",
  "Yala National Park",
  "Arugam Bay",
  "Kandy",
  "Polonnaruwa",
];

const Favorite = () => {
 
  const [favorites, setFavorites] = useState(
    Object.fromEntries(attractions.map((item) => [item, true])) 
  );

  const toggleFavorite = (name) => {
    setFavorites((prev) => ({
      ...prev,
      [name]: !prev[name], // Toggle state
    }));
  };

  return (
    <View style={styles.container}>
      <ThemedView style={styles.title}>
        <ThemedText type="title">Your favourite attractions:</ThemedText>
      </ThemedView>

      <ImageBackground source={require("@/assets/images/search/image3.png")} style={styles.backgroundImage}>
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={styles.listContent}
          data={attractions}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
           <LinearGradient colors={["#ccc", "#999"]} style={styles.itemContainer}>
            <Text style={styles.attractionText}>{item}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item)}>
              <FontAwesome name={favorites[item] ? "heart" : "heart-o"} size={24} color="red" />
            </TouchableOpacity>
          </LinearGradient>
          )}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 50,
    marginTop: 25,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContainer: {
    width: "100%",
  },
  listContent: {
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  attractionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
});

export default Favorite;
