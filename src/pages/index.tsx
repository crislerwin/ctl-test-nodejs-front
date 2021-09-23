import { Form } from 'antd'
import { ContactForm } from '../components/ContactForm'
import { api } from '../services/api'
import { BillingForm } from '../components/BillingForm'
import { Header } from '../components/Header'
import  { Container } from './styles/globals'
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
     <Header title="Contele" />
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

