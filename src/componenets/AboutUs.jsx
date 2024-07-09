import React from 'react';
import {  Container, Typography, Card, CardContent } from '@mui/material';

const AboutUs = () => {
  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        About Us
      </Typography>

      <Card sx={{ marginBottom: 4, backgroundColor: '#f5f5f5' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1">
            We started our journey in 2024 with the mission of delivering delicious and affordable food to everyone. Our commitment to quality and customer satisfaction has been the driving force behind our success.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: 4, backgroundColor: '#e0e0e0' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1">
            To provide high-quality food with exceptional service, ensuring a memorable dining experience for every customer.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: 4, backgroundColor: '#cfcfcf' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1">
            To become the leading food service provider, recognized for our commitment to quality, innovation, and community involvement.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: 4, backgroundColor: '#bfbfbf' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Our Values
          </Typography>
          <Typography variant="body1">
            <ul>
              <li>Quality: We prioritize the highest standards in everything we do.</li>
              <li>Customer Satisfaction: Our customers are at the heart of our business.</li>
              <li>Innovation: We continuously strive to improve and innovate.</li>
              <li>Community: We believe in giving back and making a positive impact in our community.</li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AboutUs;
