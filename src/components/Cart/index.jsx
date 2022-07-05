import AddProduct from '../AddProduct';
import CartFooter from '../CartFooter';
import CartHeader from '../CartHeader';
import Product from '../Products';

const Cart = () => {
    return (    
        <section className="cart"> 
            
            <CartHeader />
            <AddProduct />
            <Product />
            <CartFooter />
            
        </section>
    );
}
 
export default Cart;