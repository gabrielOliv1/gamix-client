import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "./Input";
import PasswordFeedback from "./PasswordFeedback";

const Form = () => {
  const [password, setPassword] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const checkPasswordStrength = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[$*&@#]/.test(password);

    const requirements = [
      {
        criteria: "pelo menos 8 caracteres",
        isMet: password.length >= minLength,
      },
      { criteria: "pelo menos uma letra maiúscula", isMet: hasUpperCase },
      { criteria: "pelo menos uma letra minúscula", isMet: hasLowerCase },
      { criteria: "pelo menos um número", isMet: hasNumber },
      { criteria: "pelo menos um caractere especial", isMet: hasSpecial },
    ];

    const unmetRequirements = requirements.filter((req) => !req.isMet);
    if (unmetRequirements.length === 0) {
      setFeedbackList(["Senha forte"]);
    } else {
      const feedbackList = unmetRequirements.map((req) => {
        return `A senha deve conter ${req.criteria}.`;
      });
      setFeedbackList(feedbackList);
    }
  };

  return (
    <View style={styles.form}>
      <Input title="Nome de Usuário" placeHolder="Digite seu nome de usuário" />
      <Input title="E-mail" placeHolder="Digite seu e-mail" />
      <Input
        type="password"
        title="Senha"
        placeHolder="Digite uma senha"
        value={password}
        onChangeText={handlePasswordChange}
      />
      <PasswordFeedback feedbackList={feedbackList} />
      <Input
        type="password"
        title="Confirmação de senha"
        placeHolder="Digite sua senha novamente"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    form: {
        gap: 20,
        alignItems: "center"
    }
})

export default Form;
