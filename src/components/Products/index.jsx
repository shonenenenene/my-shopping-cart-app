import "./style.scss"

const Product = () => {
    return (
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
    );
}
 
export default Product;