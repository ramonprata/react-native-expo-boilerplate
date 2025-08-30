import { useTheme } from "@emotion/react";
import { BoxContent, ThemedText } from "@shared/components";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { VIDEO_PATHS } from "../utils/constants";
import {
  CardVideoWrapper,
  Classification,
  ClassificationText,
  ImageWrapper,
  PlayButton,
} from "./styles/Videos.styled";

const Videos = () => {
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 24,
        paddingVertical: 24,
        backgroundColor: theme.colors.surface,
      }}
    >
      {VIDEO_PATHS.map((video) => {
        return (
          <BoxContent key={video.id}>
            <CardVideoWrapper>
              <ImageWrapper
                resizeMode="contain"
                source={require("../../../../assets/images/cosmos.jpg")}
              >
                <TouchableOpacity onPress={() => {}}>
                  <PlayButton name="play" size={64} color="white" />
                </TouchableOpacity>
              </ImageWrapper>

              <BoxContent flexDirection="row" alignItems="baseline">
                <ThemedText type="subtitle">{`${video.ep}. `}</ThemedText>
                <ThemedText type="defaultSemiBold">{video.title}</ThemedText>
              </BoxContent>
              <BoxContent flexDirection="row" gap={4} alignItems="flex-start">
                <View>
                  <ThemedText type="default">{video.duration}</ThemedText>
                </View>
                <Classification>
                  <ClassificationText type="link">
                    {video.classification}
                  </ClassificationText>
                </Classification>
              </BoxContent>
            </CardVideoWrapper>
          </BoxContent>
        );
      })}
    </ScrollView>
  );
};
export default Videos;
