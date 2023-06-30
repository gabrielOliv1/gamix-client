import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Button = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.buttonContent}>
            <Icon name="email" size={24} color="white" />
            <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    button: {
      width: 184,
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
      fontFamily: 'Roboto',
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      paddingLeft: 8,
    },
  });

export default Button;

  
  