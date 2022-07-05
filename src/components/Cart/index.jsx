import { useState } from 'react';
import AddProduct from '../AddProduct';
import CartFooter from '../CartFooter';
import CartHeader from '../CartHeader';
import Product from '../Products';
import currentCart from './../../data';

const Cart = () => {
    const [cart, setCart] = useState( currentCart )

    const deleteProduct = (id) => {
        setCart( ( cart ) => cart.filter((product) =>  id !== product.id))
    }

    const products = cart.map( (product) => {
        return <Product product={product} key={product.id} deleteProduct={deleteProduct} />
    })

    return (    
        <section className="cart"> 
            
            <CartHeader />
            <AddProduct />
            {products}
            <CartFooter cart={ cart } />

        </section>
    );
}
 
export default Cart;