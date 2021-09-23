import { Form } from 'antd'
import { ContactForm } from '../components/ContactForm'
import { api } from '../services/api'
import { BillingForm } from '../components/BillingForm'
import {useTheme} from 'styled-components'

const Home: React.FC = () => {
  const theme = useTheme()
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
    </>
  )
}

export default Home
