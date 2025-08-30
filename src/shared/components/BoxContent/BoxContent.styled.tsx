import styled from "@emotion/native";
import { ThemeType } from "../../theme";

export interface IBoxProps {
  center?: boolean;
  centerVertical?: boolean;
  centerHorizontal?: boolean;
  flex?: number;
  flexDirection?: "row" | "column";
  bg?: keyof ThemeType["colors"];
  gap?: number;
  padding?: number;
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  alignItems?: "flex-start" | "center" | "flex-end" | "baseline";
}
export const Box = styled.View<IBoxProps>((props) => ({
  width: "100%",
  backgroundColor: props.bg ? props.theme.colors[props.bg] : "white",
  flex: props.flex || 1,
  flexDirection: props.flexDirection || "column",
  justifyContent: props.centerVertical ? "center" : "flex-start",
  alignItems: props.centerHorizontal ? "center" : "flex-start",
  gap: props.gap || 0,
  padding: props.padding || 0,
  ...(props.center && {
    justifyContent: "center",
    alignItems: "center",
  }),
  ...(props.justifyContent && {
    justifyContent: props.justifyContent,
  }),
  ...(props.alignItems && {
    alignItems: props.alignItems,
  }),
}));
