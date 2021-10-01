import React from 'react'
import { FormContainer, ContactInput, Title, Container } from './styles'
import { Select, Space, Form, Input } from 'antd'
import { useTranslation } from 'react-i18next'

export interface IContactForm  {
  name: string
  last_name: string
  adress1: string
  adress2: string
  email: string
  phone: string
  language: string
  country: string
  zip_code: string
  city: string
  state: string
}

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
  state,
}) => {
  const { t, i18n } = useTranslation()
  return (
    <FormContainer>
      <Container>
        <Title>{t('Contact Information')}</Title>
        <Space direction="horizontal">
          <Form.Item
            name={name}
            rules={[{ required: true, message: t('First Name Alert') }]}
          >
            <ContactInput placeholder={t('First Name')} required />
          </Form.Item>

          <Form.Item
            name={last_name}
            rules={[{ required: true, message: t('Last Name Alert') }]}
          >
            <ContactInput placeholder={t('Last Name')} required />
          </Form.Item>
        </Space>

        <Space direction="horizontal">
          <Form.Item
            name={email}
            rules={[{ required: true, message: t('Email Alert') }]}
          >
            <ContactInput
              placeholder={t('Email Adress')}
              type="text"
              required
            />
          </Form.Item>

          <Form.Item
            name={phone}
            rules={[
              {
                required: true,
                message: t('Phone Number Alert')
              }
            ]}
          >
            <ContactInput placeholder={t('Phone Number')} />
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
              <Select.Option value="pt">Português</Select.Option>
              <Select.Option value="en">English</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            style={{ width: '14rem' }}
            name={country}
            rules={[{ required: true, message: t('Country Alert') }]}
          >
            <Input placeholder={t('Country')} required />
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
              <Input placeholder={t('ZIP Code')} required />
            </Form.Item>
          </Space>
        </Space>
      </Container>
    </FormContainer>
  )
}
