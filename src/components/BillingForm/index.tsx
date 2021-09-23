import { Checkbox, Select, Space, Form, Input } from 'antd'
import React from 'react'
import { countries } from '../../utils/select'
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
                message: 'Type your adress'
              }
            ]}
          >
            <Input placeholder="Adress Line 1" />
          </Form.Item>
          <Form.Item
            name="second_billing_adress"
            rules={[
              { required: true, message: 'Please complete your address' }
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
                  message: 'Type your city'
                }
              ]}
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
              name="billing_state"
              rules={[
                {
                  required: true,
                  message: 'Type your your state'
                }
              ]}
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
              name="billing_zip_code"
              style={{ width: '9rem' }}
              rules={[
                {
                  required: true,
                  message: 'Type your zipcode'
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
        <Space direction="vertical" size="small">
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
            rules={[{ required: true, message: 'Type your tracker quantity' }]}
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
