import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const Navbar = ({ currentPage, onChangePage }) => {
  const activePage = currentPage;

  const getIconStyle = (page) => {
    const activeColor = "#89BDDF";
    const inactiveColor = "#FFF";

    return activePage === page ? activeColor : inactiveColor;
  };
  return (
    <View style={styles.main}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => onChangePage("feed")}>
          <Icon
            name="home-filled"
            type="material"
            size={28}
            color={getIconStyle("feed")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onChangePage("search")}>
          <Icon
            name="search"
            type="material"
            size={28}
            color={getIconStyle("search")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="add" type="material" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onChangePage("teams")}>
          <Icon
            name="people-outline"
            type="ionicons"
            size={28}
            color={getIconStyle("teams")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onChangePage("profile")}>
          <Icon
            name="person-outline"
            type="material"
            size={28}
            color={getIconStyle("profile")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#333333",
  },
  iconsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Navbar;
