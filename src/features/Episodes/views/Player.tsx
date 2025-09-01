import { IconSymbol, Loader, ThemedText } from "@/src/shared/components";
import { useLandScape } from "@shared/hooks";
import { useEvent } from "expo";
import { useRouter } from "expo-router";
import { useVideoPlayer } from "expo-video";
import React, { useEffect, useState } from "react";
import { BackHandler, StatusBar, TouchableOpacity } from "react-native";
import { useEpisodesState } from "../hooks/useEpisodesSlice";
import {
  Container,
  HiddenHeaderWrapper,
  LoadingOverlay,
  PlayerHeader,
  VideoPlayer,
} from "./styles/Player.styled";

export default function PlayerScreen() {
  const [showPlayer, setShowPlayer] = useState(true);

  const router = useRouter();

  const selectedEpisode = useEpisodesState("selectedEpisode");

  const { unlock } = useLandScape();

  const handleBack = React.useCallback(() => {
    setShowPlayer(false);
    unlock();
    router.back();
    return true;
  }, [unlock, router]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBack
    );

    return () => backHandler.remove();
  }, [handleBack]);

  const player = useVideoPlayer(selectedEpisode?.uri ?? "", (player) => {
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

  if (!showPlayer) {
    return null;
  }

  return (
    <Container>
      <StatusBar hidden />
      {status === "loading" && (
        <LoadingOverlay>
          <Loader />
        </LoadingOverlay>
      )}

      <HiddenHeaderWrapper onPress={handleTouchOnScreen}>
        {showHeader && (
          <PlayerHeader flexDirection="row" gap={12} alignItems="center">
            <TouchableOpacity onPress={handleBack}>
              <IconSymbol name="arrow.backward" size={28} color="white" />
            </TouchableOpacity>
            <ThemedText type="subtitle">{selectedEpisode?.title}</ThemedText>
          </PlayerHeader>
        )}
      </HiddenHeaderWrapper>

      <VideoPlayer player={player} allowsFullscreen allowsPictureInPicture />
    </Container>
  );
}
