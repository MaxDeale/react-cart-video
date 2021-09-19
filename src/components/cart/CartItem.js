import React from 'react'
import { CartItemStyle, CartDeleteButtonStyle, CartInfoStyle } from '../../styles/CartScreen'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart, updateCartQty } from '../../actions/cartActions'

const CartItem = ({ item }) => {
  const [qty, setQty] = React.useState(item.qtyInCart)
  const dispatch = useDispatch()
  const handleCartDelete = (cartItemId) => {
    dispatch(deleteItemFromCart(cartItemId))
    console.log(cartItemId)
  }

  const handleCartQty = (id) => {
    dispatch(updateCartQty(id, qty))
  }

  return (
    <>
      <CartItemStyle>
        <img style={{ maxWidth: '150px', maxHeight: '150px' }} src={item.image} alt={item.title} />
        <CartInfoStyle>
          <h3>Title</h3>
          <h4>{item.title}</h4>
        </CartInfoStyle>

        <CartInfoStyle>
          <h3>Price</h3>
          <h4>
            {' '}
            <span style={{ fontWeight: 600, marginRight: '2px' }}>R</span>
            {item.price}
          </h4>
        </CartInfoStyle>

        <CartInfoStyle>
          <h3>Qty In Cart</h3>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => {
              setQty(e.target.value)
              handleCartQty(item.id)
            }}
          />
        </CartInfoStyle>

        <CartDeleteButtonStyle primary onClick={() => handleCartDelete(item.id)}>
          Delete
        </CartDeleteButtonStyle>
      </CartItemStyle>
    </>
  )
}

export default CartItem
