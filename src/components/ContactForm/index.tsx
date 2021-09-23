import React from 'react'
import {FormContainer, ContactInput, ContactSelect, Title, Container} from './styles'
import { Select, Space, Form, Input } from 'antd'
import { languages, countries } from '../../utils/data'

export const ContactForm: React.FC = () => {
  return (
    <FormContainer>
      <Container>
        <Title>Contact Information:</Title>
        <Space direction="horizontal" size="large">
          <Form.Item
            name="firstname"
            rules={[
              { required: true, message: 'Please input your firstname!' }
            ]}
          >
            <ContactInput placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="lastname"
            rules={[{ required: true, message: 'Please input your lastname!' }]}
          >
            <ContactInput placeholder="Last Name" />
          </Form.Item>
        </Space>

        <Space direction="horizontal" size="large">
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email' }]}
          >
            <ContactInput placeholder="Email Adress" type="text" />
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
            <ContactInput placeholder="Phone" />
          </Form.Item>
        </Space>

        <Space direction="horizontal" size="large" >
          <Form.Item
            style={{ width: '18rem' }}
            name="languages"
            rules={[{ required: true, message: 'Please input your languages' }]}
          >
            <Select placeholder="Languages">
              {languages.map((language) => (
                <Select.Option key={language.id} value={language.value}>
                  {language.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            style={{ width: '18rem' }}
            name="country"
            rules={[{ required: true, message: 'Please input your country!' }]}
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
      </Container>

      <Container >
    
        <Space direction="vertical" >
        <Title>Shipping Adress:</Title>
          <Form.Item
          style={{ width: '31rem' }}
            name="first_adress"
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
          style={{ width: '31rem' }}
            name="complement_adress"
            rules={[
              { required: true, message: 'Please input your complement' }
            ]}
          >
            <Input placeholder="Adress Line 2" />
          </Form.Item>
          <Space direction="horizontal">
            <Form.Item
             style={{ width: '10rem' }}
              name="city"
              rules={[{ required: true, message: 'Please select your city' }]}
            >
              <Select placeholder="City">
                {countries.map((region) => (
                  <Select.Option key={region.id} value={region.value}>
                    {region.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
             style={{ width: '10rem' }}
              name="state"
              rules={[{ required: true, message: 'Please input your state' }]}
            >
              <Select placeholder="State" >
                {countries.map((region) => (
                  <Select.Option key={region.id} value={region.value}>
                    {region.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
             style={{ width: '10rem' }}
              name="zip_code"
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
      </Container>
    </FormContainer>
  )
}

