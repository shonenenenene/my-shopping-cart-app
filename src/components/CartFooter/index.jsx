import { useEffect, useState } from 'react';
import Discount from '../Discount';
import Total from '../Total';
import "./style.scss"

const CartFooter = ( { cart } ) => {

    const [totalSum, setTotalSum] = useState( {
        price: cart.reduce( ( prev, curr ) => prev + curr.priceTotal, 0 ), 
        amount: cart.reduce( ( prev, curr ) => prev + curr.count, 0 ),
    } )
    
    useEffect( () => {
        setTotalSum( {
            price: cart.reduce( ( prev, curr ) => prev + curr.priceTotal, 0 ), 
            amount: cart.reduce( ( prev, curr ) => prev + curr.count, 0 ),
        })
    }, [cart] )
    

    return (
        <footer className="cart-footer">
            <Total totalSum={ totalSum } />
            <Discount  totalSum={ totalSum } />
        </footer>
    );
}
 
export default CartFooter;