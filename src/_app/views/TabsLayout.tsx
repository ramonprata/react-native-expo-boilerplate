import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { useTheme } from "@emotion/react";
import { HapticTab, IconSymbol } from "@shared/components";
import Logo from "./Logo";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },

        headerLeft: () => <Logo />,
        tabBarActiveTintColor: theme.colors.tabBarActiveTintColor,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {
            backgroundColor: theme.colors.surface,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="watch/index"
        options={{
          title: "Watch",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="video" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
