import {
  Container,
  HeaderLeft,
  HeaderRight,
  TitleContainer,
  Title
} from './styles'

interface HeaderProps {
  title: string
}
export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <HeaderLeft>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      </HeaderLeft>
      <HeaderRight></HeaderRight>
    </Container>
  )
}
