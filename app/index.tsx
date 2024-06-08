import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router'



export default function Index() {
  return (
 
    <View className="bg-wh">
      <Text>Dzień dobry</Text>
      <StatusBar style='auto' />
      <Link href='/home'>Go to Home </Link>
    </View>
  );
}
