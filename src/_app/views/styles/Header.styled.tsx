import styled from "@emotion/native";
import { Dimensions } from "react-native";

export const ImageHeader = styled.Image({
  height: Dimensions.get("window").height * 0.25,
  width: "100%",
});
