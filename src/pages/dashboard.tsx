import { PageHeader, Space, Table } from 'antd'
import { HeaderLogo } from '../components/HeaderLogo'

import router from 'next/router'
import { UserData } from '../interfaces/userData'
import { useFetch } from '../hooks/useFetch'

const Sucess: React.FC = () => {
  const { data } = useFetch<UserData[]>('/subscription')
  if (!data) return <h1>Loading...</h1>

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => router.push('/')}
        title={<HeaderLogo />}
      />
     
        <Space direction="vertical" style={{ textAlign: 'center', margin:10 }}>
          <h4>Full Name</h4>
          {data.map((d) => (
            <p>{`${d.first_name} ${d.last_name}`}</p>
          ))}
        </Space>
        <Space direction="vertical" style={{ textAlign: 'center', margin: 10 }}>
          <h4>Phone Number</h4>
          {data.map((d) => (
            <p>{d.phone_number}</p>
          ))}
        </Space>
        <Space direction="vertical" style={{ textAlign: 'center', margin: 10 }}>
          <h4>Language</h4>
          {data.map((d) => (
            <p>{d.language}</p>
          ))}
        </Space>
        <Space direction="vertical" style={{ textAlign: 'center', margin: 10 }}>
          <h4>Country</h4>
          {data.map((d) => (
            <p>{d.country}</p>
          ))}
        </Space>
        <Space direction="vertical" style={{ textAlign: 'center', margin: 10 }}>
          <h4>ZIP Code</h4>
          {data.map((d) => (
            <p>{d.zip_code}</p>
          ))}
        </Space>
        <Space direction="vertical" style={{ textAlign: 'center', margin: 10 }}>
          <h4>Full Adress</h4>
          {data.map((d) => (
            <p>{`${d.first_adress} ${d.second_adress}`}</p>
          ))}
        </Space>
        <Space direction="vertical" style={{ textAlign: 'center', margin: 10 }}>
          <h4>Billing Adress</h4>
          {data.map((d) => (
            <p>{`${d.primary_billing_adress} ${d.second_billing_adress}`}</p>
          ))}
        </Space>
        <Space direction="vertical" style={{ textAlign: 'center', margin: 10 }}>
          <h4>B.ZIP Code</h4>
          {data.map((d) => (
            <p>{d.billing_zip_code}</p>
          ))}
        </Space>
        <Space direction="vertical" style={{ textAlign: 'center', margin: 10 }}>
          <h4>Fuel Cut Device?</h4>
          {data.map((d) => (
            <p>{d.fcut_device === true ? 'Yes' : 'No'}</p>
          ))}
        </Space>
        <Space direction="vertical" style={{ textAlign: 'center', margin: 10 }}>
          <h4>Identify Fleet Drivers?</h4>
          {data.map((d) => (
            <p>{d.identify_fleet_drivers === true ? 'Yes' : 'No'}</p>
          ))}
        </Space>
        <Space direction="vertical" style={{ textAlign: 'center', margin: 10 }}>
          <h4>Other installed Trackers?</h4>
          {data.map((d) => (
            <p>{d.other_installed_trackers === true ? 'Yes' : 'No'}</p>
          ))}
        </Space>
      
    </>
  )
}

export default Sucess
