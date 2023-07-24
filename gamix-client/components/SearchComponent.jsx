import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import PostResult from "./PostResult";
import PersonResult from "./PersonResult";

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.text}>
        Em alta
      </Text>
      <PostResult
        title="Estranho..."
        description="Acordei hoje, tomei aquele cafézinho, entrei no siga e vi um que eu tinha 367 faltas na matéria do Hamilton, enfim, o siga."
        imageUrl={require("../assets/Logo.png")}
      />
      <Text style={styles.text}>Pessoas</Text>
      <PersonResult />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    top: 32,
    gap: 20,
  },
  text: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default SearchComponent;
