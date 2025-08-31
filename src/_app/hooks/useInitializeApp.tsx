import { sleep } from "@/src/shared/utils";
import { useColorScheme } from "@shared/hooks/useColorScheme";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Constants from "expo-constants";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

storyblokInit({
  accessToken: Constants.expoConfig?.extra?.storyblokApiToken,
  use: [apiPlugin],
});

export const useInitializeApp = () => {
  // Initialize app state and perform any necessary setup
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await sleep(3000);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return {
    colorScheme,
    loaded,
  };
};
