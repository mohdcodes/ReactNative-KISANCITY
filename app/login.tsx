import React, { useState } from "react";
import { View, TextInput, Button, Alert, Text } from "react-native";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async () => {
    try {
      console.log("Mocking OTP send for:", phoneNumber);
      setOtpSent(true);
      Alert.alert("OTP Sent!", "Check your phone for the OTP.");
    } catch (error) {
      Alert.alert("Error", "Failed to send OTP.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      if (otp === "123456") {
        Alert.alert("Success", "Login successful!");
      } else {
        Alert.alert("Error", "Invalid OTP.");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to verify OTP.");
    }
  };

  return (
    <View>
      {!otpSent ? (
        <>
          <Text>Enter Phone Number:</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            placeholder="Enter your phone number"
          />
          <Button title="Send OTP" onPress={handleSendOtp} />
        </>
      ) : (
        <>
          <Text>Enter OTP:</Text>
          <TextInput
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            placeholder="Enter OTP"
          />
          <Button title="Verify OTP" onPress={handleVerifyOtp} />
        </>
      )}
    </View>
  );
};

export default LoginScreen;
