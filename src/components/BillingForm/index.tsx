import { Checkbox, Select, Space, Form, Input } from 'antd'
import React from 'react'
import { countries, city } from '../../utils/select'
import {
  FormContainer,
  SubmitButton,
  Title,
  Container,
  PurchaseInput
} from './styles'

export const BillingForm: React.FC = () => {
  return (
    <FormContainer>
      <Container>
        <Space direction="vertical" size="small">
          <Title>Billing Adress:</Title>
          <Form.Item
            style={{ width: '28rem' }}
            name="primary_billing_adress"
            rules={[
              {
                required: true,
                message: 'Enter your billing address'
              }
            ]}
          >
            <Input placeholder="Adress Line 1" />
          </Form.Item>
          <Form.Item
            name="second_billing_adress"
            rules={[
              {
                required: true,
                message: 'Enter your billing address complement'
              }
            ]}
          >
            <Input placeholder="Adress Line 2" />
          </Form.Item>
          <Space direction="horizontal">
            <Form.Item
              style={{ width: '9rem' }}
              name="billing_city"
              rules={[
                {
                  required: true,
                  message: 'Enter your city'
                }
              ]}
            >
              <Select placeholder="City">
                {city.map((ct) => (
                  <Select.Option key={ct.id} value={ct.value}>
                    {ct.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              style={{ width: '9rem' }}
              name="billing_state"
              rules={[
                {
                  required: true,
                  message: 'Enter your state'
                }
              ]}
            >
              <Select placeholder="State">
                {countries.map((country) => (
                  <Select.Option key={country.id} value={country.value}>
                    {country.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="billing_zip_code"
              style={{ width: '9rem' }}
              rules={[
                {
                  required: true,
                  message: 'Enter your zip code'
                }
              ]}
            >
              <Input placeholder="ZIP Code" />
            </Form.Item>
          </Space>

          <Form.Item name="same_shipping_adress" valuePropName="checked">
            <Checkbox>Use shipping address as same as billing address</Checkbox>
          </Form.Item>
        </Space>
      </Container>

      <Container>
        <Space direction="vertical" style={{ width: '30rem' }}>
          <Title>Check the boxes below:</Title>
          <Form.Item name="fcut_device" valuePropName="checked">
            <Checkbox>
              Does any veihicle need to be equiped with a fuel cut off device?
            </Checkbox>
          </Form.Item>
          <Form.Item name="other_installed_trackers" valuePropName="checked">
            <Checkbox>
              Will any trackers to be installed on a bike, truck or machinery?
            </Checkbox>
          </Form.Item>

          <Form.Item name="identify_fleet_drivers" valuePropName="checked">
            <Checkbox>Will you need to identify the fleet drivers?</Checkbox>
          </Form.Item>
          <Form.Item
            name="tracker_quantity"
            rules={[{ required: true, message: 'How many trackers?' }]}
          >
            <PurchaseInput
              placeholder="How many trackers would you like to purchase?"
              type="number"
            />
          </Form.Item>

          <SubmitButton type="primary" htmlType="submit">
            Order Now
          </SubmitButton>
        </Space>
      </Container>
    </FormContainer>
  )
}
