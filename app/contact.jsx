import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <Link href='/' style={styles.link}>Back Home</Link>
    </View>
  )
}

export default Contact

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