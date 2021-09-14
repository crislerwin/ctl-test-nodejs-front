import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`

const HeaderLeft = styled.div`
  flex: 1;
  margin-left: 30px;
`

const HeaderRight = styled.div`
flex: 1;
`

const TitleContainer = styled.div`
flex: 1;
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`

export { Container, HeaderLeft, HeaderRight, TitleContainer, Title }
