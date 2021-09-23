import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/globals'
import 'antd/dist/antd.css'
import { light } from '../theme'
import { PageHeader } from 'antd'
import { HeaderLogo } from '../components/HeaderLogo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <PageHeader
        className="site-page-header"
        title={<HeaderLogo />}
      />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default MyApp
