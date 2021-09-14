import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme/theme'
import GlobalStyle from './styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default MyApp
