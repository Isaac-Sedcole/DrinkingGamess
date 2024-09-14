export default {
  expo: {
    name: "drinkinggamess",
    slug: "drinkinggamess",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/My-splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.drsaac.drinkinggamess"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/My-adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      },
      package: "com.drsaac.drinkinggamess" // Ensure this line is present
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    description: "",
    extra: {
      eas: {
        projectId: "c46f7a0e-feab-4f01-8ead-0ea788daf600"
      }
    },
    plugins: [
      "expo-build-properties",
    ]
  }
};