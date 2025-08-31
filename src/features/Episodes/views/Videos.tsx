import Header from "@/src/_app/views/Header";
import { BoxContent } from "@shared/components";
import React from "react";
import { ScrollView } from "react-native";
import { VIDEO_PATHS } from "../utils/constants";
import { Container } from "./styles/Videos.styled";
import VideoCard from "./VideoCard";

const Videos = () => {
  return (
    <Container>
      <Header />

      <BoxContent flex={2}>
        <ScrollView
          contentContainerStyle={{
            gap: 24,
            paddingVertical: 16,
          }}
        >
          {VIDEO_PATHS.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
        </ScrollView>
      </BoxContent>
    </Container>
  );
};
export default Videos;
