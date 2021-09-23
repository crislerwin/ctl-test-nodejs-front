import { Form } from 'antd'
import { ContactForm } from '../components/ContactForm'
import { api } from '../services/api'
import { BillingForm } from '../components/BillingForm'
import { PageHeader } from 'antd'
import { HeaderLogo } from '../components/HeaderLogo'
import router from 'next/router'
import { UserData } from '../interfaces/userData'
const Home: React.FC = () => {
  const onFinish = (values: UserData[]) => {
    api.post('/register', values).then((res) => {
      console.log(res)
      window.alert('Your registration has been done!')
    router.push('/Sucess')
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (<>
  <PageHeader
    className="site-page-header"
    title={<HeaderLogo />}
  />
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
