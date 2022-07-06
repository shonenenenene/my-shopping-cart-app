import "./style.scss"

const Total = ( {totalSum} ) => {
    const { price, amount } = totalSum
    const priceFormatter = new Intl.NumberFormat()


    return (
        <div className="cart-footer__total">
            <div className="total-count">amount: { amount }</div>
            <div className="total-price">total cost without discount: { priceFormatter.format(price)} yen</div>
        </div>
    );
}
 
export default Total;