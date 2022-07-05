import "./style.scss"

const Product = ( { product, deleteProduct } ) => {
    const { id, title, price } = product
    
    const priceFormatter = new Intl.NumberFormat()

    return (
        <section className="products">
            <div className="product">
                <div className="product__img"><img src="./img/itempic-placeholder.svg" alt="hi"/></div>
                <div className="product__title">{ title }</div>
                <div className="product__id">#{ id }</div>
                <div className="product__price">{ priceFormatter.format(price) } yen</div>
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