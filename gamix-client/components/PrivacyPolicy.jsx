import { View, StyleSheet, Text } from "react-native";

import Checkbox from "./Checkbox";

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
        <Checkbox />
      <Text
        style={{
          fontFamily: "System",
          fontSize: 10,
          fontWeight: "thin",
          color: "#fff",
        }}
      >
        Eu li e concordo com os termos e políticas de privacidade.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 314,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  }
});

export default PrivacyPolicy;
