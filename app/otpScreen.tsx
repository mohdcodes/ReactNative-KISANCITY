import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

const OtpScreen = ({ route, navigation }: any) => {
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      Alert.alert("Success", "Login successful!");
      navigation.replace("DummyScreen"); // Navigate to Dummy Screen
    } else {
      Alert.alert("Error", "Wrong OTP entered.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter OTP sent to {phoneNumber}:</Text>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        placeholder="Enter OTP"
      />
      <Button title="Verify" onPress={handleVerifyOtp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default OtpScreen;
