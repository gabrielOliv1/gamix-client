import { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

const Input = ({ type, title, placeHolder }) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChangeText = (newText) => {
    setText(newText);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      <View style={styles.inputContent}>
        {type === "password" ? (
          <Icon name="lock" size={16} color="white" />
        ) : (
          <Icon name="person" size={16} color="white" />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.inputStyle, isFocused && styles.focusedInput]}
          secureTextEntry={!isPasswordVisible}
          value={text}
          onChangeText={handleChangeText}
          placeholder={placeHolder}
          placeholderTextColor="#fff"
          onFocus={handleFocus}
        />
        {type === "password" ? (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.visibilityButton}
          >
            <Icon
              name={isPasswordVisible ? "visibility" : "visibility-off"}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        ) : (
            null
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContent: {
    flexDirection: "row",
    gap: 5,
    paddingBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 310,
    height: 36,
    borderRadius: 6,
    backgroundColor: "#333",
    paddingLeft: 10,
  },
  inputStyle: {
    flex: 1,
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontFamily: "System",
  },
  focusedInput: {
    color: "#fff",
  },
  visibilityButton: {
    padding: 8,
  },
});

export default Input;
