import { Form } from 'antd'
import { ContactForm } from '../components/ContactForm'
import { api } from '../services/api'
import { BillingForm } from '../components/BillingForm'
import { PageHeader } from 'antd'
import { HeaderLogo } from '../components/HeaderLogo'
import { IFormData } from '../interfaces/FormData'

const Home: React.FC = () => {
  const onFinish = (values: IFormData) => {
    api.post('/subscription', values).then(() => {
      console.log('Success!', values)
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
        <PageHeader className="site-page-header" title={<HeaderLogo />} />

        <ContactForm
          name="first_name"
          last_name="last_name"
          adress1="first_adress"
          adress2="second_adress"
          city="city"
          state="state"
          country="country"
          phone="phone_number"
          email="email"
          zip_code="zip_code"
          language="language"
        />
        <BillingForm
          adress1="primary_billing_adress"
          adress2="second_billing_adress"
          city="billing_city"
          state="billing_state"
          country="billing_country"
          zip_code="billing_zip_code"
          fcut_device="fcut_device"
          identify="identify_fleet_drivers"
          quantity="tracker_quantity"
          sh_adress="same_shipping_adress"
        />
      </Form>
    </>
  )
}

export default Home
