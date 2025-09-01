import Header from "@/src/_app/views/Header";
import * as ScreenOrientation from "expo-screen-orientation";

import { useFocusEffect } from "@/.expo/types/router";
import { Container } from "./styles/EpisodesScreen.styled";
import Videos from "./Videos";

const EpisodesScreen = () => {
  useFocusEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  });

  return (
    <Container>
      <Header />
      <Videos />
    </Container>
  );
};

export default EpisodesScreen;
