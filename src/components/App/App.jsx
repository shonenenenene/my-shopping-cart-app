import "./_vars.scss"
import "./_reset.scss"
import "./_base.scss"
import "./_section-cart.scss"

import Cart from '../Cart';

function App() {
  return (
    <section className="section-cart">
        <header className="section-cart__header">
            <h1 className="title-1">Your shopping cart<img src="./img/shocart.svg"/></h1>
        </header>
        <div className="section-cart__body">
            <div className="container">
              <Cart />
            </div>
        </div>
    </section>
  );
}

export default App;
