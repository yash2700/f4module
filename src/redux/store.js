import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import cardReducer from './reducer'
export default createStore(cardReducer,applyMiddleware(thunk))