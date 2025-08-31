import { Tabs, useSegments } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { useTheme } from "@emotion/react";
import { HapticTab, IconSymbol } from "@shared/components";
import Logo from "./Logo";

export default function TabLayout() {
  const theme = useTheme();
  const segments = useSegments();

  const isPlayer = (segments as string[]).includes("player");

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
          minHeight: 120,
        },

        headerLeft: () => <Logo />,
        tabBarActiveTintColor: theme.colors.foreground,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            display: isPlayer ? "none" : "flex",
          },
          default: {
            display: isPlayer ? "none" : "flex",
            backgroundColor: theme.colors.background,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Cosmos",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="star.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="episodes"
        options={{
          headerShown: !isPlayer,
          title: "Episodes",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="video" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
