export default {
  expo: {
    plugins: [
      [
        'expo-build-properties',
        {
          android: {
            compileSdkVersion: 34,
            targetSdkVersion: 34,
            buildToolsVersion: '34.0.0',
          },
          ios: {
            deploymentTarget: '13.4',
          },
        },
      ],
    ],
    "extra": {
      "eas": {
        "projectId": "c46f7a0e-feab-4f01-8ead-0ea788daf600"
      }
    }
  },
};
