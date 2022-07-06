import { useEffect, useState } from 'react';
import "./style.scss"


const AddProduct = () => {

    const [prodTitle, setProdTitle] = useState( '' )
    const [prodId, setProdId] = useState( '' )
    const [prodPrice, setProdPrice] = useState( '' )

    const [prodTitleDirty, setProdTitleDirty] = useState( false )
    const [prodIdDirty, setProdIdDirty] = useState( false )
    const [prodPriceDirty, setProdPriceDirty] = useState( false )

    const [prodTitleErr, setProdTitleErr] = useState( 'errs' )
    const [prodIdErr, setProdIdErr] = useState( 'errs' )
    const [prodPriceErr, setProdPriceErr] = useState( 'errs' )

    const [formValid, setFormValid] = useState(false)

    useEffect( () => {
        if (prodTitleErr === 'errs' || prodIdErr === 'errs' || prodPriceErr === 'errs') {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [prodTitleErr, prodIdErr, prodPriceErr])
    
    const titleHandler = ( e ) => {
        setProdTitle( e.target.value )
        if (e.target.value === '' || e.target.value.length > 20) {
            setProdTitleErr('errs')
        } else {
            setProdTitleErr('ok')
        }
    }

    const idHandler = ( e ) => {
        setProdId( e.target.value )
        const re = /^\d+$/
        if ( !re.test( String( e.target.value ) ) || e.target.value.length > 9) {
            setProdIdErr('errs')
        } else {
            setProdIdErr('ok')
        }
    }

    const priceHandler = ( e ) => {
        setProdPrice( e.target.value )
        const re = /^\d+$/
        if ( !re.test( String( e.target.value ) ) || e.target.value.length > 9 ) {
            setProdPriceErr('errs')
        } else {
            setProdPriceErr('ok')
        }
    }


    const blurHandler = ( e ) => {
        switch ( e.target.name ) {
            case 'title':
                setProdTitleDirty( true )
                break
            case 'id':
                setProdIdDirty( true )
                break
            case 'price': 
                setProdPriceDirty( true )
                break
        }
    }

    return (
        <section className="add-product">
            <form className="add-product__form">
                <div className="product__img"><img src="./img/itempic-placeholder.svg" alt="hi" /></div>
                <input onChange={ e => titleHandler(e)} value={prodTitle} onBlur={e => blurHandler(e)} className={`add-product__title ${prodTitleDirty && prodTitleErr}`} name="title" placeholder="what to add?" />
                <input  onChange={ e => idHandler(e)} value={prodId} onBlur={e => blurHandler(e)} className={`add-product__id ${prodIdDirty && prodIdErr}`} name="id" placeholder="paste id here" />
                <input  onChange={ e => priceHandler(e)} value={prodPrice} onBlur={e => blurHandler(e)} className={`add-product__price ${prodPriceDirty && prodPriceErr}`} name="price" placeholder="set your price"/>
                <div className="product__controls">
                    <button disabled={!formValid} type="button">add</button>
                </div>
            </form>
        </section>
    );
}
 
export default AddProduct;