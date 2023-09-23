import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import MyButton from "@components/buttons/MyButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
        <MyButton/>
        <Image source={require('@assets/icon.png')} style={{width: 200, height: 200}}/>
      <StatusBar style="auto" />
    </View>
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
