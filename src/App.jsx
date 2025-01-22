import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product"; // Import the Product component
import AboutUs from "./pages/Aboutus";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signout";
import UserProtectWrapper from "./pages/userprotectwrapper";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
          
          } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-out" element={<SignUp />} />
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
