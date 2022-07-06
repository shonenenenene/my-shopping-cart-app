import { useEffect, useState } from 'react';
import Discount from '../Discount';
import Total from '../Total';
import "./style.scss"

const CartFooter = ( { cart, applied, setApplied, disc, setDisc } ) => {

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
            <Total totalSum={ totalSum } applied={applied} setApplied={ setApplied }/>
            <Discount  totalSum={ totalSum } applied={applied} setApplied={ setApplied } disc={disc} setDisc={ setDisc } />
        </footer>
    );
}
 
export default CartFooter;