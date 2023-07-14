import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Logo from "./Logo";
import Input from "./Input";
import PrivacyPolicy from "./PrivacyPolicy";
import { ScrollView } from "react-native-gesture-handler";
import Button from "./Button";

const CreateAccount = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={50}
      >
        <ScrollView style={styles.scrollContainer}>
          <View style={{ gap: 20, alignItems: "center", marginBottom: 10 }}>
            <Logo />
            <Text
              style={{
                fontFamily: "System",
                fontSize: 28,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Criar uma conta
            </Text>
            <Input
              title="Nome de Usuário"
              placeHolder="Digite seu nome de usuário"
            />
            <Input title="E-mail" placeHolder="Digite seu e-mail" />
            <Input
              type="password"
              title="Senha"
              placeHolder="Digita uma senha"
            />
            <Input
              type="password"
              title="Confirmação de senha"
              placeHolder="Digite sua senha novamente"
            />
            <PrivacyPolicy />
            <Button title="Registrar-se" width={308}/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    width: "100%",
  },
});

export default CreateAccount;
