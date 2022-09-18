import Image from 'next/image'
import zkLeapLogo from '../images/logos/zk/zk_logo_gradient.svg'

export function Logo(props) {
  return (
    <Image
      height={50}
      width={100}
      src={zkLeapLogo}
      alt="logo"
      className="w-50 h-20 rounded-full"
    />
  )
}
