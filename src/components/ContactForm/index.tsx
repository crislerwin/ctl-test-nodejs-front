import React from 'react'
import {
  FormContainer,
  ContactInput,
  ContactSelect,
  Title,
  Container
} from './styles'
import { Select, Space, Form, Input } from 'antd'
import { languages, countries } from '../../utils/select'

export const ContactForm: React.FC = () => {
  return (
    <FormContainer>
      <Container>
        <Title>Contact Information:</Title>
        <Space direction="horizontal">
          <Form.Item
            name="first_name"
            rules={[
              { required: true, message: 'Enter your firstname!' }
            ]}
          >
            <ContactInput placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="last_name"
            rules={[{ required: true, message: 'Enter your lastname!' }]}
          >
            <ContactInput placeholder="Last Name" />
          </Form.Item>
        </Space>

        <Space direction="horizontal">
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Enter your email' }]}
          >
            <ContactInput placeholder="Email Adress" type="text" />
          </Form.Item>

          <Form.Item
            name="phone_number"
            rules={[
              {
                required: true,
                message: 'Enter your phone number!'
              }
            ]}
          >
            <ContactInput placeholder="Phone" />
          </Form.Item>
        </Space>

        <Space direction="horizontal"  >
          <Form.Item
            style={{ width: '14rem' }}
            name="language"
            rules={[{ required: true, message: 'Enter your languages' }]}
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
         style={{ width: '14rem' }}
            name="country"
            rules={[{ required: true, message: 'Enter your country!' }]}
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

      <Container>
        <Space direction="vertical" size="small">
          <Title>Shipping Adress:</Title>
          <Form.Item
            style={{ width: '28rem' }}
            name="first_adress"
            rules={[
              {
                required: true,
                message: 'Enter your adress!'
              }
            ]}
          >
            <Input placeholder="Adress Line 1" />
          </Form.Item>
          <Form.Item
            style={{ width: '28rem' }}
            name="second_adress"
            rules={[
              { required: true, message: 'Enter your complement' }
            ]}
          >
            <Input placeholder="Adress Line 2" />
          </Form.Item>
          <Space direction="horizontal">
            <Form.Item
              style={{ width: '9rem' }}
              name="city"
              rules={[{ required: true, message: 'Enter your city' }]}
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
              style={{ width: '9rem' }}
              name="state"
              rules={[{ required: true, message: 'Enter your state' }]}
            >
              <Select placeholder="State">
                {countries.map((region) => (
                  <Select.Option key={region.id} value={region.value}>
                    {region.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              style={{ width: '9rem' }}
              name="zip_code"
              rules={[
                {
                  required: true,
                  message: 'Enter your zipcode'
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
