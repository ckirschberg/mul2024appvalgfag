import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CatScreen from './screens/CatScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    // Når vi bruger navigation, skal koden 'wrappes' i en NavigationContainer
    <NavigationContainer> 

      <Stack.Navigator>
        {/* name er det navn vi bruger senere når vi vil navigere til en bestemt side.
        component er navnet på componenten */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cat" component={CatScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
