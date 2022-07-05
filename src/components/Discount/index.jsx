import "./style.scss"

const Discount = () => {
    return (
        <div className="cart-footer__discount">
            <input className="discount-value" type="number" placeholder="1 to 100 %" min="1" max="100" />
            <button type="button">apply discount</button>
            <div className="total-discount">total cost with discount: 228</div>
            <button type="button">
                <img src="./img/icons/cross.svg" alt="Delete"/>
            </button>
        </div>
    );
}
 
export default Discount;