import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import PostResult from "./PostResult";

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={{ color: "#fff", fontSize: 32, fontWeight: "bold" }}>
        Em alta
      </Text>
      <PostResult
        title="Estranho..."
        description="Acordei hoje, tomei aquele cafézinho, entrei no siga e vi um que eu tinha 367 faltas na matéria do Hamilton, enfim, o siga."
        imageUrl={require("../assets/Logo.png")}
      />

      <PostResult
        title="Estranho..."
        description="Acordei hoje, tomei aquele cafézinho, entrei no siga e vi um que eu tinha 367 faltas na matéria do Hamilton, enfim, o siga."
        imageUrl={require("../assets/Logo.png")}
      />

      <PostResult
        title="Estranho..."
        description="Acordei hoje, tomei aquele cafézinho, entrei no siga e vi um que eu tinha 367 faltas na matéria do Hamilton, enfim, o siga."
        imageUrl={require("../assets/Logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    top: 24,
    gap: 20,
  },
});

export default SearchComponent;
