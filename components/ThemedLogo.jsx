import { useColorScheme, Image } from 'react-native'
import DarkLogo from '../assets/images/logo_dark.png'
import LightLogo from '../assets/images/logo_light.png'

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo
    return (
        <Image source={logo} {...props} />
    )
}
export default ThemedLogo