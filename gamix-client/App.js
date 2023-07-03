import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/LoginScreen';
import SignUpScreen from './app/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#1C2034' },
          gestureEnabled: true,
          gestureDirection: 'horizontal '
        }}
      >
          <Stack.Screen name='sign up' component={SignUpScreen}/>
          <Stack.Screen name='login' component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}