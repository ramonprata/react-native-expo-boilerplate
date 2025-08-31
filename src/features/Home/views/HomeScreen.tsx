import Header from "@/src/_app/views/Header";
import { BoxContent, IconSymbol, ThemedText } from "@shared/components";
import { useRouter } from "expo-router";
import { ButtonChildren, WatchButton } from "./styles/HomeScreen.styled";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <BoxContent gap={16}>
      <Header />
      <BoxContent padding={16} centerHorizontal>
        <BoxContent gap={24} flex={1}>
          <ThemedText type="title">Cosmos: A Spacetime Odyssey</ThemedText>

          <BoxContent gap={8}>
            <ThemedText type="subtitle">Season 1</ThemedText>
            <ThemedText type="defaultSemiBold">
              A 13-part adventure across the universe of space and time, COSMOS:
              A SPACETIME ODYSSEY airs Sundays at 9/8c on FOX and Mondays at
              9/8c on the National Geographic Channel.
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
                <ThemedText type="defaultSemiBold">IMDb 9.2</ThemedText>
                <BoxContent flexDirection="row" alignItems="center" gap={8}>
                  <ThemedText type="defaultSemiBold">Drama</ThemedText>
                  <ThemedText>•</ThemedText>
                  <ThemedText type="defaultSemiBold">Documentary</ThemedText>
                </BoxContent>
              </BoxContent>
            </BoxContent>
          </BoxContent>
        </BoxContent>

        <WatchButton onPress={() => router.push("/episodes")}>
          <ButtonChildren>
            <IconSymbol name="play" size={36} color="black" />
            <ThemedText
              type="subtitle"
              lightColor="white"
              darkColor="black"
              style={{ marginLeft: 8 }}
            >
              Watch Now
            </ThemedText>
          </ButtonChildren>
        </WatchButton>
      </BoxContent>
    </BoxContent>
  );
}
