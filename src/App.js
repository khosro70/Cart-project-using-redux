import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import "./css files/App.css";

//components
import ProductDetails from "./components/ProductDetails";
import Store from "./components/Store";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

// redux
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
