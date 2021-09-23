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
        style={{
          background: '#fff',
          width: '100%',
          height: '100%',
          marginBottom: '20px'
        }}
      />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default MyApp
