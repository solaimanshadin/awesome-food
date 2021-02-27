import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import React from 'react';

function App() {
  const [cart, setCart] = React.useState([]);

  const addToCartHandler = (product) => {
      const newCart = [...cart , product];
      setCart(newCart)
  }

  return (
    <>
      <Header />
      <main className="container my-5">
        <div className="row">
            <Products addToCartHandler={addToCartHandler}  />
            <Sidebar cart={cart} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
