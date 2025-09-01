import Header from "@/src/_app/views/Header";

import { Container } from "./styles/EpisodesScreen.styled";
import Videos from "./Videos";

const EpisodesScreen = () => {
  return (
    <Container>
      <Header />
      <Videos />
    </Container>
  );
};

export default EpisodesScreen;
