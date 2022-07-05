import "./style.scss"

const AddProduct = () => {
    return (
        <section className="add-product">
            <div className="product__img"><img src="./img/itempic-placeholder.svg" alt="hi"/></div>
            <input className="add-product__title" placeholder="what to add?"/>
            <input className="add-product__id" placeholder="paste id here"/>
            <input className="add-product__price" placeholder="set your price"/>
            <div className="product__controls">
                <button type="button">add</button>
            </div>
        </section>
    );
}
 
export default AddProduct;