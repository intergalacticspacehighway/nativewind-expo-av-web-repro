import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import "./styles";

import { Video } from "expo-av";

export default function App() {
  return (
    <View className="flex-1 gap-4 items-center justify-center bg-white">
      <View className="hidden" />
      <Text>Visible</Text>
      <Video
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        style={{ width: 300, height: 300 }}
        shouldPlay
        isMuted
      />

      <Text>Not Visible</Text>
      <Video
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        className="h-40 w-40"
        shouldPlay
        isMuted
      />
    </View>
  );
}
