import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import Logo from "../components/Logo";
import Input from "../components/Input";
import SocialAuthOptions from "../components/SocialAuthOptions";
import Button from "../components/Button";
import RedirectLink from "../components/RedirectLink";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={50}
      >
        <ScrollView style={styles.scrollContainer}>
          <View style={{ gap: 28, alignItems: "center" }}>
            <Logo />
            <Text
              style={{
                fontFamily: "System",
                fontSize: 28,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Acesse sua conta
            </Text>
            <Input
              type="text"
              title="Username"
              placeHolder="Digite seu nome de usuário"
            />
            <Input
              type="password"
              title="Senha"
              placeHolder="Digite sua senha"
            />
            <View style={styles.box}>
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 16,
                  fontWeight: "regular",
                  color: "#fff",
                }}
              >
                Você também pode entrar com:
              </Text>
              <View style={{ width: 136 }}>
                <SocialAuthOptions />
              </View>
            </View>
            <Button
              title="Conectar-se"
              width={308}
              onPress={() => {
                navigation.navigate("feed");
              }}
            />
            <RedirectLink
              text="Ainda não tem uma conta?"
              onPress={() => {
                navigation.navigate("sign up");
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#1C2034",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    top: 50,
    width: "100%",
  },
  box: {
    width: 220,
    height: 64,
    alignItems: "center",
    gap: 24,
  },
});

export default LoginScreen;
