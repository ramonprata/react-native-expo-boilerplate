export default ({ config }) => ({
  ...config,
  expo: {
    name: "Cosmos",
    slug: "cosmos",
    version: "1.0.0",
    orientation: "default",
    icon: "./assets/images/icon.png",
    scheme: "reactnativeexpoboilerplate",
    userInterfaceStyle: "dark",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/cosmos-favicon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.ramonpratadti.cosmos",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/cosmos-favicon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#000000",
        },
      ],
      [
        "expo-video",
        {
          supportsBackgroundPlayback: true,
          supportsPictureInPicture: true,
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {},
      storyblokApiToken: process.env.STORY_BLOK_API_TOKEN,
      eas: {
        projectId: "3481c573-8e0d-4565-9bcb-d22150489050",
      },
    },
    owner: "ramonpratadti",
  },
});
