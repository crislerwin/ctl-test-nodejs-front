import styled from 'styled-components';
import {Input, Select} from 'antd'

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const ContactInput = styled(Input)`
  width: 290px;
`

const ContactSelect = styled(Select)`
  width: 290px;
`
const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 600;

  margin-top: 20px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 20px;
`


export {FormContainer, ContactInput, ContactSelect, Title, Container}