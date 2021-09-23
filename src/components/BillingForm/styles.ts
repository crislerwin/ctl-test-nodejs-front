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


const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;

`

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 600;

`
const Container = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
margin-left: 2rem
`




export { FormContainer, SubmitButton, Title, Container, PurchaseInput }
