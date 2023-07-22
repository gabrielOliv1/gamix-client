import { StyleSheet, View, Text, Image } from "react-native";

const PostResult = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContent}>
          <Text style={styles.headingText}>{title}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <Image source={imageUrl} style={styles.imageItem}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: 0.3,
    borderBottomColor: "rgba(255, 255, 255, 0.4)",
    paddingBottom: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
  },
  textContent: {
    flex: 1,
    gap: 10,
  },
  headingText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  descriptionText: {
    color: "#fff",
    fontSize: 12,
  },
  imageItem: {
    width: 80,
    height: 80,
  },
});

export default PostResult;
