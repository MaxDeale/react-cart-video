import React, { useEffect } from 'react'
import { CartContainerStyle, PageHeading } from '../../styles/CartScreen'
import { listCartItems } from '../../actions/cartActions'
import CartItem from '../../components/cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'

const CartScreen = () => {
  const dispatch = useDispatch()

  const cartItemsList = useSelector((state) => state.cartItemsList)

  const { loading, error, cartItems } = cartItemsList

  useEffect(() => {
    dispatch(listCartItems())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <PageHeading>Cart</PageHeading>
          <CartContainerStyle>
            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </CartContainerStyle>
        </>
      )}
    </>
  )
}

export default CartScreen
