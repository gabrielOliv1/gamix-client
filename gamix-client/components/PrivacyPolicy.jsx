import { View, StyleSheet, Text } from "react-native";

const PrivacyPolicy = () => {
    return (
        <View style={styles.container}>
            <View style={styles.checkBox} />
            <Text style={{
                fontFamily: "System",
                fontSize: 10,
                fontWeight: "thin",
                color: "#fff",
            }}>
                Eu li e concordo com os termos e políticas de privacidade.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 36,
        width: 314,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },  
    checkBox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: "#89BDDF",
        borderRadius: 4
    }
});

export default PrivacyPolicy;