import { IconSymbol, Loader, ThemedText } from "@/src/shared/components";
import { useEvent } from "expo";
import { useRouter } from "expo-router";
import { useVideoPlayer } from "expo-video";
import React, { useState } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { useEpisodesState } from "../hooks/useEpisodesSlice";
import {
  Container,
  HiddenHeaderWrapper,
  LoadingOverlay,
  PlayerHeader,
  VideoPlayer,
} from "./styles/Player.styled";

export default function PlayerScreen() {
  const router = useRouter();

  const selectedEpisode = useEpisodesState("selectedEpisode");

  const handleBack = React.useCallback(() => {
    router.back();
    return true;
  }, [router]);

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
