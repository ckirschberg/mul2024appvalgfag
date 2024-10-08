import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CatScreen from './screens/CatScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './screens/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import LoginScreen from './screens/Login';
import GPSComponent from './components/GPSComponent';
import GPSandMapComponent from './components/GPSandMapComponent';
import GesturesComponent from './components/GesturesComponent';
import CameraComponent from './components/CameraComponent';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function StackNavigator() {
  return (
     <Stack.Navigator>

        {/* Vis HomeScreen for at se kamera eksemplet */}
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/> */}

        {/* Vis GPSandMapComponent for at se maps eksemplet */}
        <Stack.Screen name="Home" component={GPSandMapComponent} options={{ headerShown: false }}/>

        {/* Vis GesturesComponent for at se gestures eksemplet */}
        {/* <Stack.Screen name="Home" component={GesturesComponent} options={{ headerShown: false }}/> */}


        <Stack.Screen name="Cat" component={CameraComponent} />
      </Stack.Navigator>
  )
}

export default function App() {

  return (
    // Når vi bruger navigation, skal koden 'wrappes' i en NavigationContainer
    <NavigationContainer> 
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={StackNavigator} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>


      {/* name er det navn vi bruger senere når vi vil navigere til en bestemt side.
          component er navnet på componenten */}
        
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  //container svarer til en css-klasse
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
