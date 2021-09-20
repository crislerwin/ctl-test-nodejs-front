import { Container, Header, Title, HeaderTitle, FormContainer } from './styles'
import { Checkbox, Select, Space, Form, Input, Button } from 'antd'
import { languages, countries } from '../utils/data'
import { useTheme } from 'styled-components'
const Home: React.FC = () => {
  const theme = useTheme()
  const onFinish = (values: any) => {
    console.log('Success:', values)
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
          layout="horizontal"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <FormContainer>
            <div >
            <Title>Contact Information:</Title>
              <Space direction="vertical" >
              
                <Form.Item name="username">
                  <Input
                    placeholder="First Name"
                    type="text"
                    style={{ marginLeft: 20 }}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    placeholder="Email Adress"
                    type="text"
                    style={{ marginLeft: 20 }}
                  />
                </Form.Item>
                <Form.Item>
                  <Select placeholder="Languages" style={{ marginLeft: 20 }}>
                    {languages.map((language) => (
                      <Select.Option key={language.id} value={language.value}>
                        {language.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Space>
              <Space direction="vertical" style={{ marginLeft: 40 }}>
                <Form.Item>
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Phone" />
                </Form.Item>
                <Form.Item>
                  <Select placeholder="Country" style={{ width: 300 }}>
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
                style={{ width: 600 }}
              >
               
                <Form.Item>
                  <Input placeholder="Adress Line 1" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Adress Line 2" />
                </Form.Item>
                <Space direction="horizontal">
                  <Form.Item>
                    <Select placeholder="City" style={{ width: 180 }}>
                      {countries.map((region) => (
                        <Select.Option key={region.id} value={region.value}>
                          {region.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Select placeholder="State" style={{ width: 200 }}>
                      {countries.map((region) => (
                        <Select.Option key={region.id} value={region.value}>
                          {region.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Select placeholder="ZIP Code" style={{ width: 200 }}>
                      {countries.map((region) => (
                        <Select.Option key={region.id} value={region.value}>
                          {region.label}
                        </Select.Option>
                      ))}
                    </Select>
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
                style={{ marginLeft: 20, width: 620 }}
              >
                <Form.Item>
                  <Input placeholder="Adress Line 1" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Adress Line 2" />
                </Form.Item>
                <Space direction="horizontal">
                  <Form.Item>
                    <Select placeholder="City" style={{ width: 180 }}>
                      {countries.map((region) => (
                        <Select.Option key={region.id} value={region.value}>
                          {region.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Select placeholder="State" style={{ width: 200 }}>
                      {countries.map((region) => (
                        <Select.Option key={region.id} value={region.value}>
                          {region.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Select placeholder="ZIP Code" style={{ width: 200 }}>
                      {countries.map((region) => (
                        <Select.Option key={region.id} value={region.value}>
                          {region.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Space>

                <Form.Item>
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
                <Form.Item>
                  <Checkbox>
                    Does any veihicle need to be equiped with a fuel cut off
                    device?
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox>
                    Will any trackers t be installed on a bike, truck or
                    machinery?
                  </Checkbox>
                </Form.Item>
              </div>
              <Form.Item>
                <Checkbox>
                  Will you need to identify the fleet drivers?
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="How many trackers would you like to purchase?"
                  type="number"
                  style={{ width: 620, marginTop: 4 }}
                />
              </Form.Item>
              <Button
                style={{
                  width: 400,
                  height: 50,
                  borderRadius: 5,
                  backgroundColor: theme.colors.text
                }}
                size="small"
                type="primary"
                htmlType="submit"
              >
                Order Now
              </Button>
            </div>
          </FormContainer>
        </Form>
      </Container>
    </>
  )
}

export default Home
