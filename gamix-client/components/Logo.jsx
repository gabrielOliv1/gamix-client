import { View, Image } from 'react-native';

const Logo = () => {
    return(
        <View>
            <Image 
                source={require('../assets/Logo.png')}
                style={{
                    width: 150,
                    height: 150
                }}/>
        </View>
    );
};

export default Logo;