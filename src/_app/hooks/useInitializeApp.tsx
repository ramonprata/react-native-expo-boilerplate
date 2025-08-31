import { sleep } from "@/src/shared/utils";
import { useColorScheme } from "@shared/hooks/useColorScheme";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

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
