import React, { InputHTMLAttributes, useCallback } from 'react'
import { FormContainer, Title, Container } from './styles'
import { Select, Space, Form, Input } from 'antd'
import { useTranslation } from 'react-i18next'
import { IContactForm } from '../../interfaces/ContactForm'
import MaskedInput from 'react-input-mask'
export const ContactForm: React.FC<IContactForm> = ({
  name,
  last_name,
  adress1,
  adress2,
  email,
  phone,
  language,
  country,
  zip_code,
  city,
  state
}) => {
  const { t, i18n } = useTranslation()
  const region = [
    {
      id: Math.random(),
      value: '+55',
      country: t('Brazil'),
      label: 'br'
    },
    {
      id: Math.random(),
      value: '+1',
      country: t('United States'),
      label: 'us'
    }
  ]
  return (
    <FormContainer>
      <Container>
        <Title>{t('Contact Information')}</Title>
        <Space direction="horizontal">
          <Form.Item
            style={{ width: '14rem' }}
            name={name}
            rules={[{ required: true, message: t('First Name Alert') }]}
          >
            <Input placeholder={t('First Name')} required allowClear />
          </Form.Item>

          <Form.Item
            style={{ width: '14rem' }}
            name={last_name}
            rules={[{ required: true, message: t('Last Name Alert') }]}
          >
            <Input placeholder={t('Last Name')} required allowClear />
          </Form.Item>
        </Space>

        <Space direction="horizontal">
          <Form.Item
            style={{ width: '14rem' }}
            name={email}
            rules={[{ required: true, message: t('Email Alert') }]}
          >
            <Input placeholder={t('Email Adress')} type="email" required />
          </Form.Item>

          <Form.Item
            style={{ width: '14rem' }}
            name={phone}
            rules={[
              {
                required: true,
                message: t('Phone Number Alert')
              }
            ]}
          >
            <MaskedInput
              className="ant-input"
              placeholder={t('Phone Number')}
              mask={t('Phone Mask')}
            />
          </Form.Item>
        </Space>

        <Space direction="horizontal">
          <Form.Item
            style={{ width: '14rem' }}
            name={language}
            rules={[{ required: true, message: t('Language Alert') }]}
          >
            <Select
              placeholder={t('Language')}
              onChange={(value: string) => i18n.changeLanguage(value)}
            >
              <Select.Option value="pt">{t('Portuguese')}</Select.Option>
              <Select.Option value="en">{t('English')}</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            style={{ width: '14rem' }}
            name={country}
            rules={[{ required: true, message: t('Country Alert') }]}
          >
            <Select>
              <Select.Option value="br">{t('Brazil')}</Select.Option>
              <Select.Option value="us">{t('United States')}</Select.Option>
            </Select>
          </Form.Item>
        </Space>
      </Container>

      <Container>
        <Space direction="vertical" size="small">
          <Title>{t('Shipping Adress')}</Title>
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
            rules={[{ required: true, message: t('Adress 2 Alert') }]}
          >
            <Input placeholder={t('Adress Line 2')} required />
          </Form.Item>
          <Space direction="horizontal">
            <Form.Item
              style={{ width: '9rem' }}
              name={city}
              rules={[{ required: true, message: t('City Alert') }]}
            >
              <Input placeholder={t('City')} />
            </Form.Item>
            <Form.Item
              style={{ width: '9rem' }}
              name={state}
              rules={[{ required: true, message: t('State Alert') }]}
            >
              <Input placeholder={t('State')} required />
            </Form.Item>
            <Form.Item
              style={{ width: '9rem' }}
              name={zip_code}
              rules={[
                {
                  required: true,
                  message: t('ZIP Code Alert')
                }
              ]}
            >
              <MaskedInput
                mask={t('ZIP Mask')}
                className="ant-input"
                placeholder={t('ZIP Code')}
                required
              />
            </Form.Item>
          </Space>
        </Space>
      </Container>
    </FormContainer>
  )
}
