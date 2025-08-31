import { BoxContent } from "@/src/shared/components";
import styled from "@emotion/native";

import { VideoView } from "expo-video";

export const Container = styled.View(() => ({
  flex: 1,
  backgroundColor: "black",
}));

export const PlayerHeader = styled(BoxContent)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
  paddingHorizontal: 32,
  paddingVertical: 32,
});

export const VideoPlayer = styled(VideoView)({
  width: "100%",
  height: "100%",
});

export const LoadingOverlay = styled.View({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
});

export const HiddenHeaderWrapper = styled.Pressable({
  height: 64,
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 2,
});
