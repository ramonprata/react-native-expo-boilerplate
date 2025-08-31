import { Stack } from "expo-router";

const EpisodesStack = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Episodes",
        }}
      />
      <Stack.Screen
        name="player/[videoId]"
        options={{
          title: "Player",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default EpisodesStack;
