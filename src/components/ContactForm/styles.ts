import styled from 'styled-components'
import { Input, Select } from 'antd'
import InputMask from 'react-input-mask'

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const ContactInput = styled(Input)`
  width: 14rem;
`

const ContactSelect = styled(Select)`
  width: 14rem;
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
  margin-left: 2rem;
  margin-top: 10px;
`

export { FormContainer, ContactInput, ContactSelect, Title, Container }
