import "./style.scss"
import { useEffect, useState } from 'react';

const Discount = ({totalSum}) => {

    const priceFormatter = new Intl.NumberFormat()
    const { price } = totalSum

    const [disc, setDisc] = useState( '' )
    const [discDirty, setDiscDirty] = useState( false )
    const [discErr, setDiscErr] = useState( 'errs' )
    const [formValid, setFormValid] = useState( false )

    useEffect( () => {
        if (discErr === 'errs') {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [discErr])
    
    const discHandler = ( e ) => {
        setDisc( e.target.value )
        const re = /^[1-9][0-9]?$|^100$/
        if ( !re.test( String( e.target.value )) || (e.target.value === '' )) {
            setDiscErr('errs')
        } else {
            setDiscErr('ok')
        }
    }

    const blurHandler = ( e ) => {
        switch ( e.target.name ) {
            case 'disc':
                setDiscDirty( true )
                break
        }
    }


    return (
        <form className="cart-footer__discount">
            <input className={`discount-value ${discDirty && discErr}`} type="number" placeholder="1 to 100 %" min="1" max="100" onChange={ e => discHandler(e)} value={disc} onBlur={e => blurHandler(e)} name="disc" />
            <button disabled={!formValid} className="apply" type="button">apply discount</button>
            <div className="total-discount">total cost with discount: { priceFormatter.format(price)}</div>
            <button className="cancel" type="button">
                <img src="./img/icons/cross.svg" alt="Delete"/>
            </button>
        </form>
    );
}
 
export default Discount;