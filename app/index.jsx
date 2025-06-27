import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

export default Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Spacer height={20} />
      <ThemedText title={true} style={styles.title}>
        The Number 1
      </ThemedText>
      <Spacer height={20} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />
      <ThemedText>
        <Link style={[styles.title, styles.link, { paddingBottom: '5px' }]} href="/about">About</Link>
      </ThemedText>
      <ThemedText>
        <Link style={[styles.title, styles.link, { paddingBottom: '5px' }]} href="/contact">Contact</Link>
      </ThemedText>
    </ThemedView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginVertical: 2,
    height: 100,
    width: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    textDecorationLine: 'underline',
    fontSize: 18,
  },
})