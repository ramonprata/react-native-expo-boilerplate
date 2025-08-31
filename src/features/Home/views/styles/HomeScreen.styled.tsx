import styled from "@emotion/native";

export const WatchButton = styled.TouchableOpacity({
  marginBottom: 12,
});

export const ButtonChildren = styled.View(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: 12,
  borderRadius: 8,
  backgroundColor: theme.colors.foreground,
}));
