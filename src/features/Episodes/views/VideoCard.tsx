import { BoxContent, ThemedText } from "@/src/shared/components";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useEpisodesAction } from "../hooks/useEpisodesSlice";
import { IEpisodeView } from "../types/IEpisode";
import {
  CardVideoWrapper,
  Classification,
  ClassificationText,
  DescriptionText,
  DescriptionWrapper,
  Divider,
  ImageWrapper,
  PlayButton,
} from "./styles/VideoCard.styled";

const VideoCard = ({ video }: { video: IEpisodeView }) => {
  const router = useRouter();

  const selectEpisode = useEpisodesAction("selectEpisode");

  const handleSelectEpisode = () => {
    selectEpisode(video);
    router.push({
      pathname: "/(tabs)/episodes/player/[videoId]",
      params: { videoId: video.id },
    });
  };

  return (
    <View key={video.id}>
      <BoxContent>
        <TouchableOpacity onPress={handleSelectEpisode}>
          <CardVideoWrapper flexDirection="row">
            <BoxContent flex={1} padding={0}>
              <ImageWrapper
                resizeMode="contain"
                source={require("../../../../assets/images/cosmos.jpg")}
              >
                <PlayButton name="play" size={32} color="white" />
              </ImageWrapper>
            </BoxContent>
            <BoxContent flex={2} gap={12}>
              <ThemedText type="defaultSemiBold">{video.title}</ThemedText>
              <BoxContent flexDirection="row" gap={8}>
                <View>
                  <ThemedText type="default">{video.duration}</ThemedText>
                </View>
                <Classification>
                  <ClassificationText type="link">
                    {video.classification}
                  </ClassificationText>
                </Classification>
              </BoxContent>
            </BoxContent>
          </CardVideoWrapper>
          <DescriptionWrapper>
            <DescriptionText numberOfLines={2} type="default">
              {video.description}
            </DescriptionText>
          </DescriptionWrapper>
        </TouchableOpacity>
      </BoxContent>
      <Divider />
    </View>
  );
};

export default VideoCard;
