import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL
} from '../constants/productConstants'
import { products } from '../constants/products'

export const listProducts = () => async (dispatch) => {
  const productsData = []

  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    products.forEach((product) => {
      productsData.push(product)
    })

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: productsData })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
