import Header from "@/src/_app/views/Header";
import { useState } from "react";

import { Loader } from "@shared/components";
import { useLandScape } from "@shared/hooks";
import { useFocusEffect } from "expo-router";
import { Container } from "./styles/EpisodesScreen.styled";
import Videos from "./Videos";

const EpisodesScreen = () => {
  const [loading, setLoading] = useState(true);

  const { unlock } = useLandScape();

  useFocusEffect(() => {
    const handleFocus = async () => {
      await unlock();
      setLoading(false);
    };

    handleFocus();

    return () => {};
  });

  return (
    <Container>
      <Header />
      {loading ? <Loader /> : <Videos />}
    </Container>
  );
};

export default EpisodesScreen;
