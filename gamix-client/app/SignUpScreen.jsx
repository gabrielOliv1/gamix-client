import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Logo from "../components/Logo";
import SocialAuthOptions from "../components/SocialAuthOptions";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CreateAccount from "../components/CreateAccount";

const SignUpScreen = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigation = useNavigation();

  const handleClick = () => {
    setButtonClicked(true);
  };

  return (
    <View style={styles.main}>
      {buttonClicked ? (
            <CreateAccount />
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
          <Button
            name="email"
            title="E-mail"
            width={184}
            onPress={handleClick}
          />
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1C2034",
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
