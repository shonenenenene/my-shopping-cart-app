import { useEffect, useState } from 'react';
import Discount from '../Discount';
import Total from '../Total';
import "./style.scss"

const CartFooter = ( { cart } ) => {

    const [totalSum, setTotalSum] = useState( {
        price: cart.reduce( ( prev, curr ) => prev + curr.price, 0 ), 
        amount: cart.length,
    } )
    
    useEffect( () => {
        setTotalSum( {
            price: cart.reduce( ( prev, curr ) => prev + curr.price, 0 ), 
            amount: cart.length,
        })
    },[cart])

    return (
        <footer className="cart-footer">
            <Total totalSum={ totalSum } />
            <Discount />
        </footer>
    );
}
 
export default CartFooter;