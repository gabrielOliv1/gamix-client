import { StyleSheet, View, Text } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.main}> 
            <Text>Login Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#1C2034',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default LoginScreen;