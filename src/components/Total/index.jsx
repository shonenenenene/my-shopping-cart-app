import "./style.scss"

const Total = ( {totalSum} ) => {
    const { price, amount } = totalSum
    const priceFormatter = new Intl.NumberFormat()
    return (
        <div className="cart-footer__total">
            <div className="total-count">amount: { amount }</div>
            <div className="total-price">the total cost: { priceFormatter.format(price)}</div>
        </div>
    );
}
 
export default Total;