import { useColorScheme, Image } from 'react-native'
import DarkLogo from '../assets/images/icon.png'
import LightLogo from '../assets/images/icon.png'

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo
    return (
        <Image source={logo} {...props} />
    )
}
export default ThemedLogo