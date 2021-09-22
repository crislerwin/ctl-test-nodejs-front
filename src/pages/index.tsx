import { Form } from 'antd'
import { ContactForm } from '../components/ContactForm'
import { api } from '../services/api'
import { BillingForm } from '../components/BillingForm'
import  { Container, Header, HeaderTitle } from './styles/globals'
const Home: React.FC = () => {
  const onFinish = (values: any) => {
    api.post('/register', values).then((res) => {
      console.log(res)
      window.alert('Sucess')
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <Header>
        <HeaderTitle>Contele</HeaderTitle>
      </Header>
      <Container>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <ContactForm />
          <BillingForm />
        </Form>
      </Container>
    </>
  )
}

export default Home

