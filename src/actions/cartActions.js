import {
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL,
  CART_ITEM_ADD_FAIL,
  CART_ITEM_ADD_REQUEST,
  CART_ITEM_ADD_SUCCESS,
  CART_ITEM_REMOVE_REQUEST,
  CART_ITEM_REMOVE_SUCCESS,
  CART_ITEM_REMOVE_FAIL
} from '../constants/cartConstants'
import nextId from 'react-id-generator'
import db from '../firebase/config'
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'

export const listCartItems = () => async (dispatch) => {
  let cartData = []
  async function getCartItems(db) {
    const cartCol = collection(db, 'cartItems')
    const cartSnapshot = await getDocs(cartCol)
    const cartList = cartSnapshot.docs.map((doc) => doc.data())
    return cartList
  }
  try {
    cartData = await getCartItems(db)

    dispatch({ type: CART_LIST_REQUEST })
    console.log(cartData)

    dispatch({ type: CART_LIST_SUCCESS, payload: cartData })
  } catch (error) {
    dispatch({
      type: CART_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const addProductToCart = (new_cart_item) => async (dispatch) => {
  const newCartProduct = {}

  try {
    dispatch({
      type: CART_ITEM_ADD_REQUEST
    })

    console.log(new_cart_item.title)

    const newItemId = nextId()

    await setDoc(doc(db, 'cartItems', newItemId), {
      id: newItemId,
      title: new_cart_item.title,
      price: new_cart_item.price,
      image: new_cart_item.image,
      qtyInCart: 1
    })

    alert('Item' + new_cart_item.title + ' successfully added')

    dispatch({
      type: CART_ITEM_ADD_SUCCESS,
      payload: newCartProduct
    })
  } catch (error) {
    alert('Failed To Add ' + new_cart_item.title + error)
    dispatch({
      type: CART_ITEM_ADD_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteItemFromCart = (cart_item_id) => async (dispatch) => {
  try {
    dispatch({ type: CART_ITEM_REMOVE_REQUEST })

    console.log(cart_item_id)

    await deleteDoc(doc(db, 'cartItems', cart_item_id))

    alert(cart_item_id + ' was successfully deleted')

    dispatch({ type: CART_ITEM_REMOVE_SUCCESS })
  } catch (error) {
    dispatch({
      type: CART_ITEM_REMOVE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
