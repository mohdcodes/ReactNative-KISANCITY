import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DummyScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are now logged in!</Text>
      <Button
        title="Go back to Splash"
        onPress={() => navigation.navigate('SplashScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DummyScreen;
