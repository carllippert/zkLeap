import { ConnectButton } from '@rainbow-me/rainbowkit'

const RainbowConnectButton = ({ disabled }) => {
  return <ConnectButton showBalance={false} chainStatus="none" />
}

export default RainbowConnectButton
