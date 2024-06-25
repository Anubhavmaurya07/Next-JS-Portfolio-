import React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Section, Text } from '@react-email/components';

interface NewFormSubmissionEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const NewFormSubmissionEmail: React.FC<NewFormSubmissionEmailProps> = ({
  firstName,
  lastName,
  email,
  phone,
  service,
  message
}) => (
  <Html>
    <Head />
    <Preview>New Form Submission</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Form Submission</Heading>
        <Section>
          <Text style={text}><strong>First Name:</strong> {firstName}</Text>
          <Text style={text}><strong>Last Name:</strong> {lastName}</Text>
          <Text style={text}><strong>Email:</strong> {email}</Text>
          <Text style={text}><strong>Phone:</strong> {phone}</Text>
          <Text style={text}><strong>Service:</strong> {service}</Text>
          <Text style={text}><strong>Message:</strong> {message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
};

const heading = {
  color: '#333333',
  fontSize: '24px',
  marginBottom: '20px',
};

const text = {
  color: '#555555',
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '10px',
};

export default NewFormSubmissionEmail;
