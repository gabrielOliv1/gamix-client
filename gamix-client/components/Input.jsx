import { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({ title, placeHolder }) => {
    const [text, setText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };
    
    const handleChangeText = (newText) => {
      setText(newText);
    };
  
    return (
    <View>
      <View style={style.InputContent}>
    <Icon name="person" size={16} color="white"/>
    <Text style={style.title}>{title}
    </Text>
    </View>  
    <TextInput
    style={[style.InputStyle, isFocused && style.focusedInput]} 
    value={text}
    onChangeText={handleChangeText}
    placeholder={placeHolder}
    placeholderTextColor= "#fff"
    onFocus={handleFocus}
    />
    </View>
    );
  };

  const style = StyleSheet.create({
    InputStyle: {
        backgroundColor: "#333",
        width: 309,
        height: 36,
        borderRadius: 6,
        paddingLeft: 10,
    },
    InputContent: {
      flexDirection: 'row',
      gap: 5,
      paddingBottom: 10,
    },
    title: {
      color: "#fff",
      fontFamily: 'System',
    },
    focusedInput: {
      color: '#fff',
    },
  });
  
  export default Input 