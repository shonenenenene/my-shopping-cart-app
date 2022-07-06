import "./style.scss"

const Product = ( { product, deleteProduct, changeCount } ) => {
    const { id, count, title, price, priceTotal } = product
    
    const priceFormatter = new Intl.NumberFormat()

    return (
        <section className="products">
            <div className="product">
                <div className="product__img"><img src="./img/itempic-placeholder.svg" alt="hi" /></div>
                <input onChange={ (e) => { changeCount(id, +e.target.value) } } className="product__count" type="number" value={count} min="1" max="99"/>
                <div className="product__title">{ title }</div>
                <div className="product__id">#{ id }</div>
                <div className="product__price">{ priceFormatter.format(priceTotal) } yen</div>
                <div className="product__controls">
                    <button type="button" onClick={() => { deleteProduct(id) }} id={id}>
                        <img src="./img/icons/cross.svg" alt="Delete"/>
                    </button>
                </div>
            </div>
        </section>
    );
}
 
export default Product;