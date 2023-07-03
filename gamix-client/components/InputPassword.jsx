import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InputPassword = ({ title, placeHolder }) => {
  const [text, setText] = useState('');
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
        <Icon name="lock" size={16} color="white" />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.inputStyle, isFocused && styles.focusedInput]}
          value={text}
          onChangeText={handleChangeText}
          placeholder={placeHolder}
          placeholderTextColor="#fff"
          secureTextEntry={!isPasswordVisible}
          onFocus={handleFocus}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.visibilityButton}>
          <Icon name={isPasswordVisible ? 'visibility-off' : 'visibility'} size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 309,
    height: 36,
    borderRadius: 6,
    backgroundColor: '#333',
    paddingLeft: 10,
  },
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingBottom: 10,
  },
  title: {
    color: '#fff',
    fontFamily: 'System',
  },
  inputStyle: {
    flex: 1,
    color: '#fff',
  },
  focusedInput: {
    color: '#fff',
  },
  visibilityButton: {
    padding: 8,
  },
});

export default InputPassword;
