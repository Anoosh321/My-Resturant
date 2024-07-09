import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{flewGrow :1}}>
      <AppBar position="static"  sx={{backgroundColor:"#008b8b"}}>
        <Toolbar sx={{display:'flex',justifyContent:'space-between',borderBottom: '2px solid black'}}>
        <Typography variant="h6" component="div" sx={{ flex:'1 1 auto', textAlign: 'left' }}> My Resturant</Typography>
        
          <IconButton
          edge="end"
          color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >       

</IconButton>
<Button component={Link} to="/" color="inherit">Home</Button>
<Button component={Link} to="/Menu" color="inherit">Menu</Button>
<Button component={Link} to="/AboutUs" color="inherit">About Us</Button>

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <IconButton component={Link} to="/Cart" color="inherit" aria-label="shopping cart">
            <Badge badgeContent={4} color="">
              <ShoppingCartIcon style={{color:'white'}} />
            </Badge>
          </IconButton>
        </div>

        </Toolbar>
      </AppBar>
      
    </Box>
  )
}

export default Navbar
