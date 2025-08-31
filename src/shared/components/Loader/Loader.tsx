import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { ImageContainer, LoaderContainer } from "./Loader.styled";

export const Loader = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2, // aumenta
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // volta ao normal
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  return (
    <LoaderContainer>
      <ImageContainer>
        <Animated.Image
          source={require("../../../../assets/images/cosmos-favicon.png")}
          style={[
            { width: 64, height: 64 },
            { transform: [{ scale: scaleAnim }] },
          ]}
        />
      </ImageContainer>
    </LoaderContainer>
  );
};
