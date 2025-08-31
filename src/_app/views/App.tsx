import { ThemeProvider as EmotionProvider } from "@emotion/react";

import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { darkColorSchema, lightColorSchema, theme } from "@shared/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useInitializeApp } from "../hooks/useInitializeApp";

export default function App() {
  const { colorScheme, loaded } = useInitializeApp();

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <QueryClientProvider client={new QueryClient()}>
        <EmotionProvider
          theme={{
            ...theme,
            colors: colorScheme === "dark" ? darkColorSchema : lightColorSchema,
          }}
        >
          <SafeAreaProvider>
            <Slot />
            <StatusBar style="light" />
          </SafeAreaProvider>
        </EmotionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
