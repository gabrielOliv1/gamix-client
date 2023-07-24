import { View, Image, Text, StyleSheet } from "react-native";
import Button from '../components/Button';

const PersonResult = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.profileImage}
          source={require("../assets/PersonIcon.jpeg")}
        />
      </View>
      <View style={styles.profileInfo}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>
            Vini
          </Text>
          <Text style={{ color: "#fff", fontSize: 14 }}>• Programador</Text>
        </View>
        <Text style={{ color: "#fff", fontSize: 12}}>2k+ seguidores</Text>
      </View>
      <Button title="Seguir" width={72}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: "50%",
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
export default PersonResult;
