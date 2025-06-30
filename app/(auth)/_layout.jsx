import { Stack } from "expo-router"
import { StatusBar } from "react-native"

export default function AuthLayout() {
    return (
        <>
            <StatusBar style="auto" />
            <Stack
                screenOptions={{ headerShown: false, animation: "default" }}
            />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ title: 'Home' }} />
        </>
    )
}