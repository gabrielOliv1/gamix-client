import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Logo from "../components/Logo";
import SocialAuthOptions from "../components/SocialAuthOptions";
import Button from "../components/ButtonEmail";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignUpScreen = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigation = useNavigation();

  const handleClick = () => {
    setButtonClicked(true);
  };

  return (
    <View style={styles.main}>
      {buttonClicked ? (
        <View style={styles.container}>
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
          <Input 
            title="E-mail" 
            placeHolder="Digite seu e-mail" />
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
        </View>
      ) : (
        <View style={styles.container}>
          <Logo />
          <View>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 28,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Cadastrar-se
            </Text>
          </View>
          <View style={styles.box}>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 16,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Criar uma conta com:{" "}
            </Text>
            <SocialAuthOptions />
          </View>
          <Button title="E-mail" onPress={handleClick} />
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("login");
              }}
            >
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 12,
                  fontWeight: "100",
                  color: "#fff",
                }}
              >
                Já tem uma conta?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
  container: {
    flex: 1,
    height: "54%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    gap: 28,
  },
  box: {
    width: 160,
    height: 64,
    gap: 24,
  },
});

export default SignUpScreen;
