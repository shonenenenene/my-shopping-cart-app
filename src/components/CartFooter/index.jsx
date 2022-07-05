import "./style.scss"

const CartFooter = () => {
    return (
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
    );
}
 
export default CartFooter;