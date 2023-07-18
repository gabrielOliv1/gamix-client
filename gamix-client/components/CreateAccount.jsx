import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Logo from "./Logo";
import Form from "./Form";
import PrivacyPolicy from "./PrivacyPolicy";
import { ScrollView } from "react-native-gesture-handler";
import Button from "./Button";
import RedirectLink from "./RedirectLink";
import { useNavigation } from "@react-navigation/native";

const CreateAccount = () => {
  const navigation = useNavigation();

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
            <Form />
            <PrivacyPolicy />
            <TouchableOpacity>
              <Button title="Registrar-se" width={308} />
            </TouchableOpacity>
            <RedirectLink text="Já tem uma conta?" onPress={() => {
              navigation.navigate("login");
            }}/>
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
