import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Button = ({ name, title, width, onPress }) => {
  const buttonStyle = Object.assign({width: width}, styles.button);
    return (
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <View style={styles.buttonContent}>
            <Icon name={name} size={24} color="white" />
            <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    button: {
      height: 44,
      backgroundColor: '#68589D',
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
      fontFamily: 'System',
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      paddingLeft: 8,
    },
  });

export default Button;

  
  