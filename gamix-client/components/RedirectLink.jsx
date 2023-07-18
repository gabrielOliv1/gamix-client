import { Text, TouchableOpacity } from "react-native";

const RedirectLink = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          fontFamily: "System",
          fontSize: 12,
          fontWeight: "100",
          color: "#fff",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default RedirectLink;
