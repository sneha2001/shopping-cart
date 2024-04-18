
import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import Heading from './components/Heading';
import Product from './components/Product';
import Footer from './components/Footer';
import { product_list, navigationLinks } from './components/productlist';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  const handleAddItem = (product) => {
    setCart([...cart, product])
    setTotal(total + product.newprice)
  }
  const handleRemoveItem = (removeListItems) => {
    const indexOfItem = cart.findIndex(item => item.id === removeListItems.id);
    if (indexOfItem !== -1) {
      cart.splice(indexOfItem, 1);
      setCart([...cart]);
      setTotal(total - removeListItems.newprice);
    }
  }
  const isInCart = (product) => cart.some((item) => item.id === product.id);

  return (
    <main>
      <header>
        <Navigation brand="Shop Cart" links={navigationLinks} cartCount={cart.length} carAddItems={cart} cartTotal={total} handleRemoveItem={handleRemoveItem} />
        <Heading />
      </header>
      <article className="py-5">
        <section className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols row-cols-md-2 row-cols-xl-4 justify-content-center">
            {
              product_list.map((product, index) => {
                return <Product key={index} product={product} handleAddItem={handleAddItem} isInCart={()=>isInCart(product)} handleRemoveItem={handleRemoveItem} />
              })
            }
          </div>
        </section>
      </article>

      <footer className="py-5 bg-dark">
        <Footer />
      </footer>
    </main>
  );
}

export default App;
