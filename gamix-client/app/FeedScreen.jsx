import { View, Text, StyleSheet } from "react-native";

const FeedScreen = () => {
  return (
    <View style={styles.main}>
      <Text>Feed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#1C2034",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FeedScreen;
