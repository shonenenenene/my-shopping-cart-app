import "./_vars.scss"
import "./_reset.scss"
import "./_base.scss"


function App() {
  return (
    <section className="section-cart">
        <header className="section-cart__header">
            <h1 className="title-1">Your shopping cart<img src="./img/shocart.svg"/></h1>
        </header>
        <div className="section-cart__body">
            <div className="container">

                <header className="cart-header">
                    <div className="cart-header__title">Title</div>
                    <div className="cart-header__id">ID</div>
                    <div className="cart-header__price">Price</div>
                </header>

                <section className="add-product">
                    <div className="product__img"><img src="./img/itempic-placeholder.svg" alt="hi"/></div>
                    <input className="add-product__title" placeholder="what to add?"/>
                    <input className="add-product__id" placeholder="paste id here"/>
                    <input className="add-product__price" placeholder="set your price"/>
                    <div className="product__controls">
                        <button type="button">add</button>
                    </div>
                </section>

                <section className="products">
                    <div className="product">
                        <div className="product__img"><img src="./img/itempic-placeholder.svg" alt="hi"/></div>
                        <div className="product__title">Apple watch</div>
                        <div className="product__id">322</div>
                        <div className="product__price">29 000 rub.</div>
                        <div className="product__controls">
                            <button type="button">
                                <img src="./img/icons/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="products">
                    <div className="product">
                        <div className="product__img"><img src="./img/itempic-placeholder.svg" alt="hi"/></div>
                        <div className="product__title">Apple watch</div>
                        <div className="product__id">322</div>
                        <div className="product__price">29 000 rub.</div>
                        <div className="product__controls">
                            <button type="button">
                                <img src="./img/icons/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                    </div>
                </section>

                <footer className="cart-footer">
                    <div className="cart-footer__total">
                        <div className="total-count">amount: 3</div>
                        <div className="total-price">the total cost: 1488</div>
                    </div>
                    <div className="cart-footer__discount">
                        <input className="discount-value" type="number" placeholder="1 to 99 %"/>
                        <button type="button">apply discount</button>
                        <div className="total-discount">total cost with discount: 228</div>
                        <button type="button">
                            <img src="./img/icons/cross.svg" alt="Delete"/>
                        </button>
                    </div>
                </footer>

            </div>
        </div>
    </section>
  );
}

export default App;
