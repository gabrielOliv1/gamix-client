import { StyleSheet, View } from 'react-native';

const SocialAuthOptions = () => {
    return(
        <View style={styles.iconsContainer}>
        <Image source={require('../assets/google.png')}/>
        <Image source={require('../assets/linkedin.png')}/>
        <Image source={require('../assets/github.png')}/>
    </View>
    );
};

const styles = StyleSheet.create({
    iconsContainer: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default SocialAuthOptions;