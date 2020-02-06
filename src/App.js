import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Products from "./components/products";
import Share from "./components/share";
import Footer from "./components/footer";

function App() {
  const [data, setData] = useState([]);
  const [error, setErrors] = useState(null);

  async function fetchData() {
    try {
      let res = await fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1");
      res = await res.json();
      setData(res)
    } catch (err) {
      setErrors(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : (
          <>
            <Header />
            <Products products={data.products} />
            <Share />
            <Footer />
          </>
        )}
    </>
  );
}

export default App;