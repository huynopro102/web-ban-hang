
import './App.css';
import {  BrowserRouter , Route , Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Products from "./pages/Products/Products"
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/forgotPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detailproducts" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
      
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
