import styled from "@emotion/native";
import { View } from "react-native";

export const Content = styled(View)({
  paddingHorizontal: 16,
  marginTop: 16,
  gap: 24,
  flex: 1,
});

export const WatchButton = styled.TouchableOpacity({
  paddingBottom: 16,

  alignItems: "center",
  justifyContent: "flex-end",
});

export const ButtonChildren = styled.View(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  padding: 12,
  borderRadius: 8,
  backgroundColor: theme.colors.foreground,
  gap: 8,
}));
