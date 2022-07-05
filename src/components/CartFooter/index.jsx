import Discount from '../Discount';
import Total from '../Total';
import "./style.scss"

const CartFooter = () => {
    return (
        <footer className="cart-footer">
            <Total />
            <Discount />
        </footer>
    );
}
 
export default CartFooter;