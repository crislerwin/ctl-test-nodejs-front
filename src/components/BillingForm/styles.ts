import styled from 'styled-components'
import { Button, Input } from 'antd'

const SubmitButton = styled(Button)`
  width: 300px;
  height: 50px;
  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.text};
`
const PurchaseInput = styled(Input)`
width: 640px;
`
const ButtonContainer = styled.div`
  margin-left: 320px;
  margin-top: 20px;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
`
const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;
export { ButtonContainer, FormContainer, SubmitButton, Title, Container, PurchaseInput }
