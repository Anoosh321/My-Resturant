
import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Container, IconButton, Typography, Divider, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from './CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const AddToCartPage = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);

  // Calculate total price
  const totalBill = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrderClick = () => {
    setShowOrderForm(true);
  };

  const handleConfirmOrderClick = () => {
  console.log('Order confirmed');
  };

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty</Typography>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cart.map((item) => (
            <Card key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
              <CardMedia
                component="img"
                height="100"
                image={item.image}
                alt={item.name}
                sx={{ width: '100px' }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {item.price} Rs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: 
                  <IconButton size="small" onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}>
                    <RemoveIcon />
                  </IconButton>
                  {item.quantity}
                  <IconButton size="small" onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>
                    <AddIcon />
                  </IconButton>
                </Typography>
              </CardContent>
              <IconButton color="secondary" onClick={() => removeFromCart(item.id)}>
                <DeleteIcon />
              </IconButton>
            </Card>
          ))}
          <Divider sx={{ margin: '1rem 0' }} />
          <Typography variant="h6">
            Total Bill: {totalBill} Rs
          </Typography>
          {!showOrderForm ? (
            <Button variant="contained" color="primary" onClick={handlePlaceOrderClick}>
              Place Order
            </Button>
          ) : (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h5">Order Details</Typography>
              <form>
                <TextField
                  required
                  id="name"
                  label="Name"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  required
                  id="phone"
                  label="Phone Number"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  required
                  id="address"
                  label="Address"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  required
                  id="city"
                  label="City"
                  fullWidth
                  margin="normal"
                />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Total Bill: {totalBill} Rs
                </Typography>
                <Button variant="contained" color="primary" onClick={handleConfirmOrderClick} sx={{ mt: 2 }}>
                  Confirm Order
                </Button>
              </form>
            </Box>
          )}
        </Box>
      )}
    </Container>
  );
};

export default AddToCartPage;
