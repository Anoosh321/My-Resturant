import React from 'react';
import Navbar from './componenets/Navbar';
import Menu from './componenets/Menu';
import Home from './componenets/Home';
import AboutUs from './componenets/AboutUs';
import Cart from './componenets/Cart';
import { Routes,Route, BrowserRouter} from 'react-router-dom';
import FoodDetailPage from './componenets/foodDetailPage';
import AddToCartPage from './componenets/Cart';
import { CartProvider } from './componenets/CartContext';
const App = () => {
  const addToCart = () => {  
  };
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/menu/:id" element={<FoodDetailPage addToCart={addToCart} />} />
        <Route path="/cart" element={<AddToCartPage />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}
export default App;

