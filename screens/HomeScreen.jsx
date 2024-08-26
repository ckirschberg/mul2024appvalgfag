import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation(); // vi bruger 'useNavigation' til at navigere til andre sider.

    const navigateToCat = () => {
        navigation.navigate('Cat') // navigerer til 'Cat' siden.
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Cat" onPress={navigateToCat} />
      </View>
    );
  }