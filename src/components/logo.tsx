import Image from 'next/image'
import logo from '../../public/logo.png'

export default function Logo() {
  return <Image src={logo} alt="logo" height={undefined} width={125} priority />
}
