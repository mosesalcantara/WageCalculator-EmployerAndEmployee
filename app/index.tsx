import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const IndexPage = () => {
  return (
    <SafeAreaView className="flex-1 p-4">
      <Text className="font-b">Index Page</Text>
      <Text className="font-r">Index Page</Text>
    </SafeAreaView>
  );
};

export default IndexPage;
