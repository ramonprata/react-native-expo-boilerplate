import { BoxContent, Loader } from "@shared/components";
import React from "react";
import { ScrollView } from "react-native";
import { useEpisodesData } from "../hooks/useEpisodesData";
import EpisodesFailedFeedback from "./EpisodesFailedFeedback";
import VideoCard from "./VideoCard";

const Videos = () => {
  const { data, error, isLoading } = useEpisodesData();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <EpisodesFailedFeedback message={error.message} />;
  }

  if (!data?.length) {
    return <EpisodesFailedFeedback message="No episodes found." />;
  }

  return (
    <BoxContent flex={2}>
      <ScrollView
        contentContainerStyle={{
          gap: 24,
          paddingVertical: 16,
        }}
      >
        {data.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })}
      </ScrollView>
    </BoxContent>
  );
};
export default Videos;
