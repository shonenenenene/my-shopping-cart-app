import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import AddProduct from '../AddProduct';
import CartFooter from '../CartFooter';
import CartHeader from '../CartHeader';
import Product from '../Products';
import currentCart from './../../data';


const Cart = ({cart, setCart}) => {
    
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
    
    const [applied, setApplied] = useState( false )

    const [disc, setDisc] = useState( '' )

    const products = cart.map( (product) => {
        return <Product product={product} key={product.id} deleteProduct={deleteProduct}  changeCount={changeCount} applied={applied}  disc={disc} setDisc={ setDisc } setApplied={ setApplied } />
    } )

    

    return (    
        <section className="cart"> 
            
            <CartHeader/>
            <AddProduct cart={ cart } setCart={setCart}/>
            {products}
            <CartFooter cart={ cart } applied={applied} setApplied={ setApplied } disc={disc} setDisc={ setDisc } />

        </section>
    );
}
 
export default Cart;