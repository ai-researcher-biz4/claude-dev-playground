import React from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { RootStackScreenProps } from "src/types/navigation";

type Props = RootStackScreenProps<"Detail">;

const DetailScreen = ({ route }: Props) => {
  const { id, title } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title ?? "Detail"}</Text>
        <Text style={styles.subtitle}>ID: {id}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
    color: "#666",
  },
});

export default DetailScreen;
