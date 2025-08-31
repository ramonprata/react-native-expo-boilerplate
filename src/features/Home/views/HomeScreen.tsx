import Header from "@/src/_app/views/Header";
import { BoxContent, IconSymbol, ThemedText } from "@shared/components";
import { useRouter } from "expo-router";
import { HOME_SCREEN_TEXTS } from "../utils/constants";
import {
  ButtonChildren,
  Content,
  WatchButton,
} from "./styles/HomeScreen.styled";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <BoxContent gap={8}>
      <Header />
      <BoxContent centerHorizontal justifyContent="space-between" flex={1}>
        <Content>
          <ThemedText type="title">{HOME_SCREEN_TEXTS.title}</ThemedText>
          <BoxContent gap={8}>
            <ThemedText type="subtitle">
              {HOME_SCREEN_TEXTS.subtitle}
            </ThemedText>
            <ThemedText type="default">
              {HOME_SCREEN_TEXTS.description}
            </ThemedText>
            <BoxContent
              justifyContent="space-between"
              flexDirection="row"
              flex={1}
            >
              <BoxContent
                flexDirection="row"
                gap={42}
                justifyContent="space-between"
              >
                <ThemedText type="defaultSemiBold">
                  {HOME_SCREEN_TEXTS.imdbRating}
                </ThemedText>
                <BoxContent flexDirection="row" alignItems="center" gap={8}>
                  <ThemedText type="defaultSemiBold">
                    {HOME_SCREEN_TEXTS.genres[0]}
                  </ThemedText>
                  <ThemedText>•</ThemedText>
                  <ThemedText type="defaultSemiBold">
                    {HOME_SCREEN_TEXTS.genres[1]}
                  </ThemedText>
                </BoxContent>
              </BoxContent>
            </BoxContent>
          </BoxContent>
        </Content>

        <WatchButton onPress={() => router.push("/episodes")}>
          <ButtonChildren>
            <IconSymbol name="play" size={36} color="black" />
            <ThemedText type="subtitle" lightColor="white" darkColor="black">
              {HOME_SCREEN_TEXTS.watchNow}
            </ThemedText>
          </ButtonChildren>
        </WatchButton>
      </BoxContent>
    </BoxContent>
  );
}
