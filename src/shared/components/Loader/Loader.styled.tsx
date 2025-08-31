import styled from "@emotion/native";
import Animated from "react-native-reanimated";

export const LoaderContainer = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.colors.shadow,
  width: "100%",
}));

export const ImageContainer = styled(Animated.View)({
  width: 100,
  height: 100,
  borderRadius: 50,
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
});

export const LoaderImage = styled(Animated.Image)({});
