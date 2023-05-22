import ATGlogo from '../images/ATG logo/newLogo.svg'
import Image from 'next/image'

export function Logo(props) {
  return <Image alt="logo" src={ATGlogo} {...props} />
}
