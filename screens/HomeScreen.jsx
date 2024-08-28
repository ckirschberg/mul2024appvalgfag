import { View, Text, Button, StyleSheet, Image } from "react-native";
import CameraComponent from '../components/CameraComponent';
import { useState } from 'react';

export default function HomeScreen() {
    const [camera, setCamera] = useState(false);
    const [photoToDisplay, setPhotoToDisplay] = useState(null)
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          {photoToDisplay && ( <Image source={{ uri: photoToDisplay.uri }} style={styles.preview} /> )}

          {camera ? <CameraComponent setPhotoToDisplay={setPhotoToDisplay} setCamera={setCamera}></CameraComponent> : <View><Text>Kamera bliver vist her når du trykker på knappen</Text>
            <Button title="Open camera" onPress={() => setCamera(true)}/></View>
        }
          
      </View>
    );
  }

  const styles = StyleSheet.create({
    preview: {
      flex: 1,
      alignSelf: 'stretch',
    },
  });