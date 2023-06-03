import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, Button } from 'react-native';
import CorinthinasLogo from './assets/corinthians.png';
import CorinthiansAudio from './assets/corinthians.mp3';
import CassioImage from './assets/Cássio.jpg';
import Casioooo from './assets/CASSIOOOOOO.mp3';

import { Audio } from 'expo-av';
import { useState } from 'react';

export default function App() {

  const [ imageToRender, setImageToRender ] = useState(CorinthinasLogo)  

  async function playAudio() {
    const { sound } = await Audio.Sound.createAsync(CorinthiansAudio);
    await sound.playAsync();
  }

  async function handleCassio() {
    setImageToRender(CassioImage);
    const { sound } = await Audio.Sound.createAsync(Casioooo);
    await sound.playAsync();

    setTimeout(() => {
      setImageToRender(CorinthinasLogo);
    }, 3 * 1000);
  }

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <StatusBar style="auto" />
      <View className="w-1/2 h-1/4 mx-auto p-4">
        <Image className="h-full w-full" source={imageToRender} />
        <Text className="text-center text-3xl  p-4 flex">CORINTHIANS</Text>
      </View>
      <View className="mt-16 flex flex-wrap">
        <View className="p-4">
          <Button title='Play Me' onPress={playAudio} />
        </View>
        <View className="p-4">
          <Button title='Surprise' onPress={handleCassio} />
        </View>
      </View>
    </View>
  );
}