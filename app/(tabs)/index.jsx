import { StyleSheet, Image, Text } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
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
});
