import { PageHeader, Space, Table } from 'antd'
import { HeaderLogo } from '../components/HeaderLogo'

import router from 'next/router'
import { UserData } from '../interfaces/userData'
import { useFetch } from '../hooks/useFetch'
import React from 'react'
const { Column, ColumnGroup } = Table
const Sucess: React.FC = () => {
  const { data } = useFetch<UserData[]>('/register')
  if (!data) return <h1>Loading...</h1>

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => router.push('/')}
        title={<HeaderLogo />}
      />
      <Space>
        <Table dataSource={data}>
          <ColumnGroup title="User Data">
            <Column title="First Name" dataIndex="first_name" key="firstname" />
            <Column title="Last Name" dataIndex="last_name" key="lastname" />
            <Column title="Email" dataIndex="email" key="email" />
            <Column title="Language" dataIndex="language" key="language" />
            <Column
              title="Adress 1"
              dataIndex="first_adress"
              key="firstadress"
            />
            <Column
              title="Adress 2"
              dataIndex="second_adress"
              key="second_adress"
            />
            <Column title="City" dataIndex="city" key="city" />
            <Column title="ZIP Code" dataIndex="zip_code" key="zipcode" />

            <Column
              title="Billing Adress 1"
              dataIndex="primary_billing_adress"
              key="billing_adress1"
            />
            <Column
              title="Billing Adress 2"
              dataIndex="second_billing_adress"
              key="billing_adress2"
            />
            <Column
              title="Billing City"
              dataIndex="billing_city"
              key="billing_city"
            />
            <Column
              title="Billing State"
              dataIndex="billing_state"
              key="billing_state"
            />
            <Column
              title="Billing ZIP"
              dataIndex="billing_zip_code"
              key="b_zipcode"
            />
            <Column
              title="Trackers"
              dataIndex="tracker_quantity"
              key="trackerquantity"
            />
          </ColumnGroup>
        </Table>
      </Space>
    </>
  )
}

export default Sucess
