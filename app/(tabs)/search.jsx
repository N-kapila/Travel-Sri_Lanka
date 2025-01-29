import React from "react";
import { View, TextInput, FlatList, Image, StyleSheet,TouchableOpacity } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const images = [
  require("@/assets/images/search/image1.png"),
  require("@/assets/images/search/image2.png"),
  require("@/assets/images/search/image3.png"),
  require("@/assets/images/search/image4.png"),
  require("@/assets/images/search/image5.png"),
  require("@/assets/images/search/image6.png"),
  require("@/assets/images/search/image7.png"),
  require("@/assets/images/search/image8.png"),
];

const Search = () => {
  const handleSearch = () => {
    console.log("Search button pressed!");
    // Add search functionality here
  };
  return (
    <View style={styles.container}>
     
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search your dream location here" placeholderTextColor="#aaa" style={styles.searchInput} />
       <TouchableOpacity onPress={handleSearch} style={styles.iconButton}>
          <FontAwesome5 name="search-location" size={20} color="#333" />
        </TouchableOpacity>
      </View>

     
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // 2 columns
        renderItem={({ item }) => <Image source={item} style={styles.image} />}
        contentContainerStyle={styles.imageGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background
    paddingTop: 40,
    marginTop: 20,
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 10,
    width: "80%",
    height: 40,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: "#333",
    fontSize: 14,
  },
   iconButton: {
    padding: 5, 
  },
  imageGrid: {
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180,
    margin: 10,
    borderRadius: 10,
  },
});

export default Search;
