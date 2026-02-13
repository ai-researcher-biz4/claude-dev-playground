import React from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { AuthStackScreenProps } from "src/types/navigation";

type Props = AuthStackScreenProps<"OtpVerification">;

const OtpVerificationScreen = ({ route }: Props) => {
  const { email } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>OTP Verification Screen</Text>
        <Text style={styles.subtitle}>{email}</Text>
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
  },
});

export default OtpVerificationScreen;
