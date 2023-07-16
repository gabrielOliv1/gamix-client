import { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Checkbox = () => {
  const [checkBoxClicked, setCheckBoxClicked] = useState(false);

  const handleCheckBoxClick = () => {
    setCheckBoxClicked(!checkBoxClicked);
  };

  return (
    <TouchableOpacity onPress={handleCheckBoxClick}>
      {checkBoxClicked ? (
        <Icon style={styles.checkBox} name="checkbox-marked" />
      ) : (
        <Icon style={styles.checkBox} name="checkbox-blank-outline" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    fontSize: 24,
    color: "#89BDDF",
  },
});

export default Checkbox;
