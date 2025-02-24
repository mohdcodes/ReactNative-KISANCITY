import { View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Button title="Go to Login" onPress={() => router.push("/login")} />
    </View>
  );
}
