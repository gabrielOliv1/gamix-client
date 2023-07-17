import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PasswordFeedback = ({ feedbackList }) => {
  return (
    <>
      {feedbackList.map((feedback, index) => (
        <View key={index} style={styles.feedbackContainer}>
          {feedback === "Senha forte" ? (
            <Icon name="check" style={{ fontSize: 24, color: "#89BDDF" }} />
          ) : (
            <Icon name="close" style={{ fontSize: 24, color: "#89BDDF" }} />
          )}

          <Text style={{ color: "#fff" }}>{feedback}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  feedbackContainer: {
    flexDirection: "row",
    gap: 5,
    width: 310,
    alignItems: "center"
  },
});

export default PasswordFeedback;
