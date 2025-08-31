import { BoxContent, ThemedText } from "@/src/shared/components";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
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

const VideoCard = ({
  video,
}: {
  video: {
    id: string;
    title: string;
    duration: string;
    classification: string;
    description: string;
  };
}) => {
  const router = useRouter();

  return (
    <React.Fragment key={video.id}>
      <BoxContent>
        <CardVideoWrapper flexDirection="row">
          <BoxContent flex={1} padding={0}>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/(tabs)/episodes/player/[videoId]",
                  params: { videoId: video.id },
                })
              }
            >
              <ImageWrapper
                resizeMode="contain"
                source={require("../../../../assets/images/cosmos.jpg")}
              >
                <PlayButton name="play" size={32} color="white" />
              </ImageWrapper>
            </TouchableOpacity>
          </BoxContent>
          <BoxContent flex={2} gap={8}>
            <BoxContent flexDirection="row" alignItems="baseline">
              <ThemedText type="defaultSemiBold">{video.title}</ThemedText>
            </BoxContent>
            <BoxContent flexDirection="row" gap={8} alignItems="flex-start">
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
      </BoxContent>
      <Divider />
    </React.Fragment>
  );
};

export default VideoCard;
