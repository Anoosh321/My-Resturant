import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import home from '../images/home.jpg'; 

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        padding: 4,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to our Restaurant
        </Typography>
        <Box
          component="img"
          src={home}
          alt="Restaurant Banner"
          sx={{
            width: '100%',
            maxWidth: '500px',
            marginBottom: 4,
            borderRadius: 2,
            boxShadow: 10,
          }}
        />
        <Typography variant="h6" paragraph>
          Experience the best dining with us. Enjoy a variety of dishes crafted
          with the finest ingredients.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/Menu"
          sx={{ marginTop: 4 }}
        >
          Order Now
        </Button>
      </Container>
    </Box>
  );
};

export default Home;

