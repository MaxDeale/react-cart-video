import React from 'react'
import { CartItemStyle, CartDeleteButtonStyle, CartInfoStyle } from '../../styles/CartScreen'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../actions/cartActions'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const handleCartDelete = (cartItemId) => {
    dispatch(deleteItemFromCart(cartItemId))
    console.log(cartItemId)
  }
  return (
    <>
      <CartItemStyle>
        <img style={{ width: '150px' }} src={item.image} alt={item.title} />
        <CartInfoStyle>
          <h3>Title</h3>
          <h4>{item.title}</h4>
        </CartInfoStyle>

        <CartInfoStyle>
          <h3>Price</h3>
          <h4>{item.price}</h4>
        </CartInfoStyle>

        <CartInfoStyle>
          <h3>Qty In Cart</h3>
          <h4>{item.qtyInCart}</h4>
        </CartInfoStyle>

        <CartDeleteButtonStyle primary onClick={() => handleCartDelete(item.id)}>
          Delete
        </CartDeleteButtonStyle>
      </CartItemStyle>
    </>
  )
}

export default CartItem
