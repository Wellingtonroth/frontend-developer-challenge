import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Products from "./components/products";
import Share from "./components/share";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Products />
      <Share />
      <Footer />
    </>
  );
}

export default App;