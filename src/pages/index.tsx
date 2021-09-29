import { Form } from 'antd'
import { ContactForm } from '../components/ContactForm'
import { api } from '../services/api'
import { BillingForm } from '../components/BillingForm'
import { PageHeader } from 'antd'
import { HeaderLogo } from '../components/HeaderLogo'
import { UserData } from '../interfaces/userData'
const Home: React.FC = () => {
  const onFinish = (values: UserData) => {
    api.post('/subscription', values).then((res) => {
      console.log(res)
      window.alert(
        `${values.first_name} ${values.last_name} has been registered successfully`
      )
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <PageHeader className="site-page-header" title={<HeaderLogo />} />
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
