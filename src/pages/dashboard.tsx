import { PageHeader, Card, Col, Row } from 'antd'
import { HeaderLogo } from '../components/HeaderLogo'
import styled from "styled-components";

import router from 'next/router'
import { UserData } from '../interfaces/userData'
import { useFetch } from '../hooks/useFetch'
import React from 'react'

const Sucess: React.FC = () => {
  const {data} = useFetch<UserData[]>('/register')
 if (!data) return <h1>Loading...</h1>
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => router.push('/')}
        title={<HeaderLogo />}
      />
      <Container>
      <Row gutter={16}>
      <Col span={8}>
{
  data?.map((user: UserData) => (
   
   
  
      <Card  title={`${user.first_name} ${user.last_name}`} bordered={false} style={{width: 300}}>
     
      <Title>Email</Title>
      <Paragraph>{user.email}</Paragraph>
      <Title>Phone Number</Title>
      <Paragraph>{user.phone_number}</Paragraph>
      <Title>Language</Title>
      <Paragraph>{user.language}</Paragraph>
      <Title>First Adress</Title>
      <Paragraph>{user.first_adress}</Paragraph>
      <Title>Second Adress</Title>
      <Paragraph>{user.second_adress}</Paragraph>
      <Title>Country</Title>
      <Paragraph>{user.country}</Paragraph>
      <Title>State</Title>
      <Paragraph>{user.state}</Paragraph>
      <Title>City</Title>
      <Paragraph>{user.city}</Paragraph>
      <Title>Zip Code</Title>
      <Paragraph>{user.zip_code}</Paragraph>
      <Title>Billing Zip Code</Title>
      <Paragraph>{user.billing_zip_code}</Paragraph>
      <Title>Billing City</Title>
      <Paragraph>{user.billing_city}</Paragraph>
      <Title>Billing State</Title>
      <Paragraph>{user.billing_state}</Paragraph>
      <Title>Primary Billing Adress</Title>
      <Paragraph>{user.primary_billing_adress}</Paragraph>
      <Title>Second Billing Adress</Title>
      <Paragraph>{user.second_billing_adress}</Paragraph>
      <Title>Other Installed Trackers?</Title>
      <Paragraph>{user.other_installed_trackers === true ? 'Yes' : 'No'}</Paragraph>
      <Title>Same Shipping Adress?</Title>
      <Paragraph>{user.same_shipping_adress  === true ? 'Yes' : 'No'}</Paragraph>
      <Title>Identify Fleet Drivers?</Title>
      <Paragraph>{user.identify_fleet_drivers  === true ? 'Yes' : 'No'}</Paragraph>
      <Title>Have any Fuel Cut device?</Title>
      <Paragraph>{user.fcut_device  === true ? 'Yes' : 'No'}</Paragraph>
      <Title>Tracker Quantity</Title>
      <Paragraph>{user.tracker_quantity}</Paragraph>
    </Card>
    


  ))}
  </Col>
    </Row>
     </Container>
  
    </>
  )

       }
 
export default Sucess




const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
margin: 0 auto;
`;

const Title = styled.h1`
color: ${p => p.theme.colors.text};
font-size: 14px;
font-weight: 700;


`;
const Paragraph = styled.p`
color: black;
font-size: 14px;
font-weight: 400;

`;
