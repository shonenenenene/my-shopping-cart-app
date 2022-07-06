import { calculateNewValue } from '@testing-library/user-event/dist/utils';
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

    const changeCount = (id, value) => {
        setCart( ( cart ) => {
            return cart.map( ( product ) => {
                if ( product.id === id ) {
                    return {
                        ...product,
                        count: value,
                        priceTotal: value * product.price
                    }
                }
                return product
            })
        })
    }

    const products = cart.map( (product) => {
        return <Product product={product} key={product.id} deleteProduct={deleteProduct} changeCount={ changeCount } />
    } )
    

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