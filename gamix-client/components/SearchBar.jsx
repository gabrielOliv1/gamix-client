import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = () => {
    const searchText = () => {

    }
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Icon name="search" type="material" size={20} color="#fff" />
        {/*<Text style={{ color: "#fff", fontSize: 12, opacity: 0.6 }}>Pesquisar</Text>*/}
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          onChangeText={searchText} // função para buscar conteúdo dinamicamente
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#626CA7",
    width: "90%",
    height: 40,
    borderRadius: 8,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    paddingLeft: 8,
    gap: 5,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 14,
  },
});
export default SearchBar;
