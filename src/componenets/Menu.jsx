import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography, IconButton, TextField, Snackbar, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import { Add, Remove } from '@mui/icons-material';
import { useCart } from './CartContext';

import pulao from "../images/pulao.jpg";
import pizza from "../images/pizza.jpg";
import broast from "../images/broast.jpg";
import burger from "../images/burger.jpg";
import fries from "../images/fries.jpg";
import karahi from "../images/karahi.jpg";

const foodItems = [
  {
    id: '1',
    name: 'Pulao',
    description: 'Chicken with baryani flavours',
    price: 250,
    image: pulao,
  },
  {
    id: '2',
    name: 'Burger',
    description: 'Bun with Chicken Pati',
    price: 650,
    image: burger,
  },
  {
    id: '3',
    name: 'Karahi',
    description: 'Chicken Karahi',
    price: 1200,
    image: karahi,
  },
  {
    id: '4',
    name: 'Pizza',
    description: 'Delicious Pizza with cheesy flavours',
    price: 1500,
    image: pizza,
  },
  {
    id: '5',
    name: 'Fries',
    description: 'Potato Fries',
    price: 500,
    image: fries,
  },
  {
    id: '6',
    name: 'Broast',
    description: 'Chicken Broast',
    price: 1200,
    image: broast,
  },
];

const Menu = () => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleQuantityChange = (id, amount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, (prevQuantities[id] || 1) + amount),
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    addToCart({ ...item, quantity });
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Menu
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {foodItems.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345, marginBottom: '1rem' }}>
            <CardMedia
              component="img"
              height="160"
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                Price: {item.price} Rs
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <IconButton onClick={() => handleQuantityChange(item.id, -1)}>
                  <Remove />
                </IconButton>
                <TextField
                  type="number"
                  value={quantities[item.id] || 1}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) - (quantities[item.id] || 1))}
                  inputProps={{ min: 1 }}
                  sx={{ width: 60, mx: 1 }}
                />
                <IconButton onClick={() => handleQuantityChange(item.id, 1)}>
                  <Add />
                </IconButton>
              </Box>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                component={Link}
                to={`/menu/${item.id}`}
              >
                Show Details
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Added to cart successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Menu;
