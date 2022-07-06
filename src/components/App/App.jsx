import { useState } from 'react';
import "./_vars.scss"
import "./_reset.scss"
import "./_base.scss"
import "./_section-cart.scss"
import currentCart from './../../data';
import Cart from '../Cart';

function App() {

  const [cart, setCart] = useState( currentCart )

  const isEmpty = () => {
    if ( cart.length === 0 ) {
      return 'empty'
    } 
  }

  return (
    <section className="section-cart">
        <header className="section-cart__header">
        <h1 className={`title-1 ${isEmpty()}`}>Your shopping cart<img src="./img/shocart.svg"/></h1>
        </header>
        <div className="section-cart__body">
            <div className="container">
          <Cart cart={cart} setCart={ setCart } />
            </div>
        </div>
    </section>
  );
}

export default App;
