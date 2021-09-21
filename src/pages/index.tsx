import styled from 'styled-components';	
import { Checkbox, Select, Space, Form, Input, Button } from 'antd'
import { languages, countries } from '../utils/data'
import { useTheme } from 'styled-components'
import { api } from '../services/api'
const Home: React.FC = () => {
  const theme = useTheme()
  const onFinish = (values: any) => {
    api.post('/register', values).then((res) => {
      console.log(res);
      window.alert('Dados enviados com Sucesso');
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
          <FormContainer>
            <div style={{ marginLeft: 20 }}>
              <Title>Contact Information:</Title>
              <Space direction="vertical" style={{ width: 240 }}>
                <Form.Item
                  name="firstname"
                  rules={[
                    { required: true, message: 'Please input your firstname!' }
                  ]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email' }
                  ]}
                >
                  <Input placeholder="Email Adress" type="text" />
                </Form.Item>
                <Form.Item
                  name="languages"
                  rules={[
                    { required: true, message: 'Please input your languages' }
                  ]}
                >
                  <Select placeholder="Languages">
                    {languages.map((language) => (
                      <Select.Option key={language.id} value={language.value}>
                        {language.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Space>
              <Space
                direction="vertical"
                style={{ marginLeft: 40, width: 240 }}
              >
                <Form.Item
                  name="lastname"
                  rules={[
                    { required: true, message: 'Please input your lastname!' }
                  ]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone number!'
                    }
                  ]}
                >
                  <Input placeholder="Phone" />
                </Form.Item>
                <Form.Item
                  name="country"
                  rules={[
                    { required: true, message: 'Please input your country!' }
                  ]}
                >
                  <Select placeholder="Country">
                    {countries.map((region) => (
                      <Select.Option key={region.id} value={region.value}>
                        {region.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Space>
            </div>

            <div style={{ marginLeft: 140 }}>
            <Title>Shipping Adress:</Title>
              <Space
                direction="vertical"
                style={{ width: 600 
                }}
              >
                
                <Form.Item
                  name="adress1"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your firstadress!'
                    }
                  ]}
                >
                  <Input placeholder="Adress Line 1" />
                </Form.Item>
                <Form.Item
                  name="adress2"
                  rules={[
                    { required: true, message: 'Please input your complement' }
                  ]}
                >
                  <Input placeholder="Adress Line 2" />
                </Form.Item>
                <Space direction="horizontal">
                  <Form.Item
                    name="city"
                    rules={[
                      { required: true, message: 'Please select your city' }
                    ]}
                  >
                    <Select placeholder="City" style={{ width: 180 }}>
                      {countries.map((region) => (
                        <Select.Option key={region.id} value={region.value}>
                          {region.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="state"
                    rules={[
                      { required: true, message: 'Please input your state' }
                    ]}
                  >
                    <Select placeholder="State" style={{ width: 200 }}>
                      {countries.map((region) => (
                        <Select.Option key={region.id} value={region.value}>
                          {region.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="zipcode"
                    rules={[
                      {
                        required: true,
                        message: 'Please select your zipcode'
                      }
                    ]}
                  >
                    <Input placeholder="ZIP Code" />
                  </Form.Item>
                </Space>
              </Space>
            </div>
          </FormContainer>
          <FormContainer>
            <div>
              <Title>Billing Adress:</Title>
              <Space
                direction="vertical"
                style={{ marginLeft: 20, width: 600 }}
              >
                <Form.Item
                  name="b_adress1"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your select your firstadress!'
                    }
                  ]}
                >
                  <Input placeholder="Adress Line 1" />
                </Form.Item>
                <Form.Item
                  name="b_adress2"
                  rules={[
                    { required: true, message: 'Please complete your address' }
                  ]}
                >
                  <Input placeholder="Adress Line 2" />
                </Form.Item>
                <Space direction="horizontal">
                  <Form.Item
                    name="b_city"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your select your city'
                      }
                    ]}
                  >
                    <Select placeholder="City" style={{ width: 180 }}>
                      {countries.map((region) => (
                        <Select.Option key={region.id} value={region.value}>
                          {region.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="b_state"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your select your state'
                      }
                    ]}
                  >
                    <Select placeholder="State" style={{ width: 200 }}>
                      {countries.map((region) => (
                        <Select.Option key={region.id} value={region.value}>
                          {region.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="b_zipcode"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your zipcode'
                      }
                    ]}
                  >
                  <Input placeholder="ZIP Code" />
                  </Form.Item>
                </Space>

                <Form.Item name="usesmbillingadress?" valuePropName="checked">
                  <Checkbox>
                    Use shipping address as same as billing address
                  </Checkbox>
                </Form.Item>
              </Space>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 40
              }}
            >
              <Title>Check the boxes below:</Title>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Form.Item name="fuelcut?" valuePropName="checked">
                  <Checkbox>
                    Does any veihicle need to be equiped with a fuel cut off
                    device?
                  </Checkbox>
                </Form.Item>
                <Form.Item name="trackers?" valuePropName="checked">
                  <Checkbox>
                    Will any trackers t be installed on a bike, truck or
                    machinery?
                  </Checkbox>
                </Form.Item>
              </div>
              <Form.Item name="identify?" valuePropName="checked">
                <Checkbox>
                  Will you need to identify the fleet drivers?
                </Checkbox>
              </Form.Item>
              <Form.Item
                name="purchaseTrackers"
                rules={[
                  { required: true, message: 'Please input your trackers' }
                ]}
              >
                <Input
                  placeholder="How many trackers would you like to purchase?"
                  type="number"
                  style={{ width: 620, marginTop: 4 }}
                />
              </Form.Item>
              <ButtonContainer>
              <SubmitButton
               
                type="primary"
                htmlType="submit"
              >
                Order Now
              </SubmitButton>
              </ButtonContainer>
            </div>
          </FormContainer>
        </Form>
      </Container>
    </>
  )
}



export default Home
const SubmitButton = styled(Button)`
width: 300px;
height: 50px;
border-radius: 5px;

background-color: ${(props) => props.theme.colors.text};
`;
const ButtonContainer = styled.div`
margin-left: 320px;
margin-top: 20px;
`;

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

 const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
`

