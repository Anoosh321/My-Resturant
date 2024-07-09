import React from 'react';
import { useParams } from 'react-router-dom';
import {  Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
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
    price: '250 Rs',
    image: pulao,
  },
  {
    id: '2',
    name: 'Burger',
    description: 'Bun with Chicken Pati',
    price: '650 Rs',
    image: burger,
  },
  {
    id: '3',
    name: 'Karahi',
    description: 'Chicken Karahi',
    price: '1200 Rs',
    image: karahi,
  },
  {
    id: '4',
    name: 'Pizza',
    description: 'Delicious Pizza with cheesy flavours',
    price: '1500 Rs',
    image: pizza,
  },
  {
    id: '5',
    name: 'Fries',
    description: 'Potato Fries',
    price: '500 Rs',
    image: fries,
  },
  {
    id: '6',
    name: 'Broast',
    description: 'Chicken Broast',
    price: '1200 Rs',
    image: broast,
  },
];

const FoodDetailPage = () => {
  const { id } = useParams();
  const foodItem = foodItems.find(item => item.id === id);

  if (!foodItem) {
    return <Typography>Item not found</Typography>;
  }

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={foodItem.image}
          alt={foodItem.name}
        />
        <CardContent>
          <Typography variant="h4">{foodItem.name}</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {foodItem.description}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Price: {foodItem.price}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FoodDetailPage;



