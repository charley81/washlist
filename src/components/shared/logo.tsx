import Image from 'next/image'

const logo = '/logo.png'

export default function Logo() {
  return <Image src={logo} alt="logo" height={125} width={125} priority />
}
