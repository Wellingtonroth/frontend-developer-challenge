import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Products from "./components/products";
import Share from "./components/share";
import Footer from "./components/footer";
import * as S from "./styled";

const API_FIRST_GET = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1';

function App() {
  const [nextPage, setNextPage] = useState(API_FIRST_GET);
  const [products, setProducts] = useState([]);
  const [error, setErrors] = useState(null);

  async function fetchData(url) {
    try {
      const { nextPage, products: newProducts }  = await fetch(url).then(res => res.json());
      setNextPage(nextPage)
      setProducts(products.concat(newProducts))
    } catch (err) {
      setErrors(err)
    }
  }

  useEffect(() => {
    fetchData(nextPage)
  }, [])

  return (
    <S.Main>
      {error ? (
        <h1>{error}</h1>
      ) : (
          <>
            <Header />
            <Products fetchData={fetchData} products={products} nextPage={nextPage} />
            <Share />
            <Footer />
          </>
        )}
    </S.Main>
  );
}

export default App;