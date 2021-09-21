import styled from 'styled-components'
import { Input, Select } from 'antd'

const Container = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.background};
 
`;
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  
`

const StyledInput = styled(Input)`
  border-radius: 4px;
  width: 300px;
  margin-left: 20px;
  
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
`

const StyledOption = styled(Select)<string | any>`
  width: 300px;
  margin-left: 20px;
  margin-top: 10px;
`

const BillingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

const LargeInput = styled(Input)`
  border-radius: 4px;
  width: 624px;
  margin-left: 20px;
  margin-top: 10px;
`

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Option = styled(Select)<string | any>`
  width: 200px;
  margin-left: 20px;
  margin-top: 10px;
`
const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;	
`
export  {
FormContainer,
  Container,
  StyledInput,
  LargeInput,
  Option,
  Header,
  OptionContainer,
  BillingContainer,
  Title,
  Contact,
  HeaderTitle,
  StyledOption,
  AdressContainer,
}
