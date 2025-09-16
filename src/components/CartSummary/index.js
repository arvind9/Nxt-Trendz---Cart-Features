// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <>
          <div className="cart-summary-bg">
            <h1 className="order-total">
              <span className="order-lable">Order Total : </span>Rs{total}/-
            </h1>
            <p>{cartList.length} Items in cart</p>
            <button type="button" className="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
