import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { listCartItemsReducer } from './reducers/cartReducer'
import { productListReducer } from './reducers/productReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  cartItemsList: listCartItemsReducer,
  productsList: productListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
