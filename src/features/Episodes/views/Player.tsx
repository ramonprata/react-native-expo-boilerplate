import { IconSymbol, ThemedText } from "@/src/shared/components";
import { useEvent } from "expo";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { useVideoPlayer } from "expo-video";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StatusBar, TouchableOpacity } from "react-native";
import { VIDEO_PATHS } from "../utils/constants";
import {
  Container,
  LoadingOverlay,
  PlayerHeader,
  VideoPlayer,
  VideoWrapper,
} from "./styles/Player.styled";

export default function PlayerScreen() {
  const { videoId } = useLocalSearchParams();
  const router = useRouter();

  const video = VIDEO_PATHS.find((v) => v.id === videoId)!;

  const player = useVideoPlayer(video.uri, (player) => {
    player.loop = true;
    player.play();
  });

  const { status } = useEvent(player, "statusChange", {
    status: player.status,
  });

  const [showHeader, setShowHeader] = useState(false);
  let timeoutId: number | null = null;

  const handleTouchOnScreen = () => {
    setShowHeader((prev) => {
      if (!prev) {
        timeoutId && clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setShowHeader(false), 3000);
      }
      return !prev;
    });
  };

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

  return (
    <Container>
      <StatusBar hidden />
      {status === "loading" && (
        <LoadingOverlay>
          <ActivityIndicator size="large" color="white" />
        </LoadingOverlay>
      )}

      <VideoWrapper onPress={handleTouchOnScreen}>
        {showHeader && (
          <PlayerHeader flexDirection="row" gap={8} alignItems="center">
            <TouchableOpacity onPress={() => router.back()}>
              <IconSymbol name="arrow.backward" size={28} color="white" />
            </TouchableOpacity>
            <ThemedText>{video.title}</ThemedText>
          </PlayerHeader>
        )}
      </VideoWrapper>
      <VideoPlayer player={player} allowsFullscreen allowsPictureInPicture />
    </Container>
  );
}
