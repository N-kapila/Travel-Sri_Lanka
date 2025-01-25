import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ThemeProvider } from "../../context/ThemeContext";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="search-location" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            title: "Favorite",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite-border" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="catagories"
          options={{
            title: "Catagories",
            tabBarIcon: ({ color }) => (
              <AntDesign name="menufold" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
