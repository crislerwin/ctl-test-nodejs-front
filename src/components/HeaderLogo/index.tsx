import Image from 'next/image'
import logo from '../../assets/contele.png'

export const HeaderLogo: React.FC = () => {
  return <Image src={logo} alt="logo" width="120" height="60" />
}
