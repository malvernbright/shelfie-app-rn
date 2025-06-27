import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors';

const About = () => {
  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={styles.title}>About</Text>
      <Link href='/' style={styles.link}>Back Home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img:{
      marginVertical: 20
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    link: {
        textDecorationLine: 'underline',
        fontSize: 18
    }
})