import { Checkbox, Space, Form, Input } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  FormContainer,
  SubmitButton,
  Title,
  Container,
  PurchaseInput
} from './styles'
import { IBillingForm } from '../../interfaces/BillingForm'
import MaskedInput from 'react-input-mask'
export const BillingForm: React.FC<IBillingForm> = ({
  adress1,
  adress2,
  city,
  state,
  zip_code,
  country,
  sh_adress,
  fcut_device,
  identify,
  quantity
}) => {
  const { t } = useTranslation()
  return (
    <FormContainer>
      <Container>
        <Space direction="vertical" size="small">
          <Title>{t('Billing Adress')}</Title>
          <Form.Item
            style={{ width: '28rem' }}
            name={adress1}
            rules={[
              {
                required: true,
                message: t('Adress 1 Alert')
              }
            ]}
          >
            <Input placeholder={t('Adress Line 1')} required />
          </Form.Item>
          <Form.Item
            style={{ width: '28rem' }}
            name={adress2}
            rules={[
              {
                required: true,
                message: t('Adress 2 Alert')
              }
            ]}
          >
            <Input placeholder={t('Adress Line 2')} required type="text" />
          </Form.Item>
          <Space direction="horizontal">
            <Form.Item
              style={{ width: '9rem' }}
              name={city}
              rules={[
                {
                  required: true,
                  message: t('City Alert')
                }
              ]}
            >
              <Input placeholder={t('City')} required type="text" />
            </Form.Item>
            <Form.Item
              style={{ width: '9rem' }}
              name={state}
              rules={[
                {
                  required: true,
                  message: t('State Alert')
                }
              ]}
            >
              <Input placeholder={t('State')} required />
            </Form.Item>
            <Form.Item
              name={zip_code}
              style={{ width: '9rem' }}
              rules={[
                {
                  required: true,
                  message: t('ZIP Code Alert')
                }
              ]}
            >
              <MaskedInput mask={t('ZIP Mask')} className="ant-input" placeholder={t('ZIP Code')} required />
            </Form.Item>
          </Space>

          <Form.Item name={sh_adress} valuePropName="checked">
            <Checkbox>{t('Same Address')}</Checkbox>
          </Form.Item>
        </Space>
      </Container>

      <Container>
        <Space direction="vertical" style={{ width: '30rem' }}>
          <Title>{t('Check Box')}</Title>
          <Form.Item name={fcut_device} valuePropName="checked">
            <Checkbox>{t('Fuel Cut Device')}</Checkbox>
          </Form.Item>
          <Form.Item name="other_installed_trackers" valuePropName="checked">
            <Checkbox>{t('Installed Trackers')}</Checkbox>
          </Form.Item>

          <Form.Item name={identify} valuePropName="checked">
            <Checkbox>{t('Fleet Drivers')}</Checkbox>
          </Form.Item>
          <Form.Item
            name={quantity}
            rules={[{ required: true, message: t('HMT Alert') }]}
          >
            <PurchaseInput
              placeholder={t('How Many Trackers')}
              type="number"
              minLength={1}
              maxLength={99}
              required
            />
          </Form.Item>
          <SubmitButton type="primary" htmlType="submit">
            {t('Submit Button')}
          </SubmitButton>
        </Space>
      </Container>
    </FormContainer>
  )
}
