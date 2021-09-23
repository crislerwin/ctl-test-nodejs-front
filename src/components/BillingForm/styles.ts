import styled from 'styled-components'
import { Button, Input } from 'antd'

const SubmitButton = styled(Button)`
  width: 300px;
  height: 50px;
  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.text};
`
const PurchaseInput = styled(Input)`
width: 31rem;
`
const ButtonContainer = styled.div`
  margin: 0 auto;
 
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 20px;
  
`

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 600;
`
const Container = styled.div`
display: flex;
flex-direction: column;

`




export { ButtonContainer, FormContainer, SubmitButton, Title, Container, PurchaseInput }
