import styled from 'styled-components'
import { Input, Select } from 'antd'

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const ContactInput = styled(Input)`
  width: 16rem;
`

const ContactSelect = styled(Select)`
  width: 16rem;
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
`

export { FormContainer, ContactInput, ContactSelect, Title, Container }
