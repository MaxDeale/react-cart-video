import {
  CART_ITEM_ADD_FAIL,
  CART_ITEM_ADD_REQUEST,
  CART_ITEM_ADD_SUCCESS,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL,
} from "../constants/cartConstants"

export const listCartItemsReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_LIST_REQUEST:
      return {
        loading: true,
        cartItems: [],
      }
    case CART_LIST_SUCCESS:
      return {
        loading: false,
        cartItems: action.payload,
      }
    case CART_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const addItemToCartReducer = (state = { newCartItem: {} }, action) => {
  switch (action.type) {
    case CART_ITEM_ADD_REQUEST:
      const currentItem = action.payload
      const existItem = state.cartItems.find(
        (x) => x.product === currentItem.product
      )

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? existItem : x
          ),
        }
      } else {
        return{
          ...state, 
          cartItems:[...state.cartItems, currentItem]
        }
      }
     
    case CART_ITEM_ADD_SUCCESS:
      return {
        loading: false,
        newCartItem: action.payload,
      }
    case CART_ITEM_ADD_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
