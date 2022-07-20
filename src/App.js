import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Ecommerce/components/Cart";
import Footer from "./Ecommerce/components/Footer/Footer";
import Home from "./Ecommerce/components/Home";
import Navbar from "./Ecommerce/components/Navbar";
import Product from "./Ecommerce/components/Product";
import Products from "./Ecommerce/components/Products";
import store from "./Ecommerce/redux/store";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer></Footer>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
