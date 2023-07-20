import { View, Text, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";
import { useState } from "react";

const FeedScreen = () => {
  const [currentPage, setCurrentPage] = useState("feed");

  const handleChangePage = (pageName) => {
    setCurrentPage(pageName);
  };
  return (
    <View style={styles.main}>
      {currentPage === "feed" && <Text>Feed</Text>}
      {currentPage === "search" && <Text>Search</Text>}
      <Navbar currentPage={currentPage} onChangePage={handleChangePage} />
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
});

export default FeedScreen;
