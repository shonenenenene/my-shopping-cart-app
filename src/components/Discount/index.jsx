import "./style.scss"
import { useEffect, useState } from 'react';

const Discount = ({totalSum, applied, setApplied, disc, setDisc}) => {

    const priceFormatter = new Intl.NumberFormat()
    const { price } = totalSum

    // const [disc, setDisc] = useState( '' )
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

    let discPrice = Math.round(price / 100 * (100 - disc))
    
    const swap = () => {
        if ( !formValid ) {
            return price
        } else return discPrice
    }


    // const [applied, setApplied] = useState( false )


    return (
        <form className={`cart-footer__discount ${applied && "applied"}`}>
            <input className={`discount-value ${discDirty && discErr} ${applied && 'disabled'}`} type="number" placeholder="1 to 100 %" min="1" max="100" onChange={ e => discHandler(e)} value={!applied && disc} onBlur={e => blurHandler(e)} name="disc" />
            <button disabled={!formValid} onClick={() => { setApplied(true) }} className={`apply ${applied && "applied-btn"}`} type="button"><span>apply discount</span></button>
            <div className={`total-discount`}>total cost with discount: { priceFormatter.format(swap())} yen</div>
            <button className={`cancel ${!applied && 'cancel-hidden'}`} onClick={() => { setApplied( false ) }} type="button">
                <img src="./img/icons/cross.svg" alt="delete discount"/>
            </button>
        </form>
    );
}
 
export default Discount;