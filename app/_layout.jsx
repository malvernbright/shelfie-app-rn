import { Slot, Stack } from 'expo-router';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
        headerTitleAlign: 'center'
      }}>
        <Stack.Screen name='index' options={{ title: 'Home' }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />

      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({})