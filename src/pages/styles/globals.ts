import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    font-family:  'Roboto', sans-serif;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => p.theme.colors.background};
`

const Header = styled.div`
  background-color: #fff;
  padding: 10px;
`

const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  margin-left: 20px;
  font-size: 24px;
  font-weight: 600;
`


export { Container, Header, HeaderTitle }