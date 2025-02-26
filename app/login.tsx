import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }: any) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendOtp = () => {
    if (!phoneNumber) {
      Alert.alert("Error", "Please enter a valid phone number.");
      return;
    }
    console.log("Mocking OTP send for:", phoneNumber);
    Alert.alert("OTP Sent!", "Check your phone for the OTP.");
    navigation.navigate("OtpScreen", { phoneNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        placeholder="Enter your phone number"
      />
      <Button title="Verify Phone Number" onPress={handleSendOtp} />
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

export default LoginScreen;
