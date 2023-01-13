import React, { useContext, createContext, useState } from "react";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";

export const store = createContext();
function App() {
  const [userdetails, setUserdetails] = useState({ email: "", password: "" });
  const [cartitems, setCartitems] = useState([]);
  const [orderitems, setOrderitems] = useState([]);
  return (
    <div>
      <store.Provider
        value={[
          cartitems,
          setCartitems,
          userdetails,
          setUserdetails,
          orderitems,
          setOrderitems
        ]}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
