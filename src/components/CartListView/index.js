import CartItem from '../CartItem'
import CartSummary from '../CartSummary'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const onRemoveCartItem = () => {
        removeAllCartItems()
      }

      return (
        <>
          <button
            type="button"
            className="removeall"
            onClick={onRemoveCartItem}
          >
            Remove All
          </button>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          <CartSummary />
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
