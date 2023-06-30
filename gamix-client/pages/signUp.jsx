import { StyleSheet, View, Text } from "react-native";
import Logo from "../components/Logo";
import SocialAuthOptions from "../components/SocialAuthOptions";
import Button from "../components/ButtonEmail";

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Logo/>
            <View>
                <Text style={{ fontFamily: 'Roboto', fontSize: 28, fontWeight: 'bold', color: '#fff'}}>Cadastrar-se</Text>
            </View>
            <View style={styles.box}>
                <Text style={{ fontFamily: 'Roboto', fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Criar uma conta com: </Text>
                <SocialAuthOptions/>
            </View>
            <Button title="E-mail"/>
            <View>
                <Text style={{ fontFamily: 'Roboto', fontSize: 13, color: '#fff'}}>Já tem uma conta? </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '54%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 28
    },
    box: {
        width: 160,
        height: 64,
        gap: 24
    }
});

export default SignUp;