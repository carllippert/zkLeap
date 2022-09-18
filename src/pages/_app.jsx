import 'focus-visible'
import '../styles/tailwind.css'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { UserContextProvider } from '@/components/UserContext'

const { chains, provider } = configureChains(
  [chain.localhost, chain.polygon, chain.optimism, chain.arbitrum],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'zkLeap',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <UserContextProvider>
        {/* <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider> */}
        <RainbowKitProvider coolMode chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
        {/* </RainbowKitSiweNextAuthProvider>
      </SessionProvider> */}
      </UserContextProvider>
    </WagmiConfig>
  )
}
