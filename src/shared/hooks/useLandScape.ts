import * as ScreenOrientation from "expo-screen-orientation";

import { useEffect } from "react";

export const useLandScape = () => {
  useEffect(() => {
    const forceLandscape = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    };

    forceLandscape();

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    };
  }, []);
};
