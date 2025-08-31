import { BoxContent, IconSymbol, ThemedText } from "@/src/shared/components";
import styled from "@emotion/native";
import { View } from "react-native";

export const CardVideoWrapper = styled(BoxContent)({
  paddingHorizontal: 16,
  gap: 16,
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const ImageWrapper = styled.ImageBackground({
  aspectRatio: 3 / 2,
  width: "100%",
  borderRadius: 8,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
});

export const PlayButton = styled(IconSymbol)({});

export const Classification = styled(View)({
  borderTopWidth: 1,
  justifyContent: "center",
  alignItems: "center",
  width: 20,
  aspectRatio: 1,
  borderWidth: 1,
  borderColor: "#ffffff",
  backgroundColor: "#0b660bff",
  borderRadius: 4,
});

export const ClassificationText = styled(ThemedText)({
  fontSize: 10,
  fontWeight: "bold",
  color: "#ffffff",
  lineHeight: 12,
});

export const DescriptionWrapper = styled(BoxContent)({
  padding: 12,
});

export const DescriptionText = styled(ThemedText)({
  fontSize: 12,
});

export const Divider = styled(View)(({ theme }) => ({
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.background,
}));
