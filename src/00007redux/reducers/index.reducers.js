import { combineReducers } from 'redux'
import contadorReducer from './contador.reducer';
import contadorReducerClass from './contadorClass.reducer'
import { shoppingReducer } from './shopping.reducers'
import { crudReducer } from './crud.reducers'

const reducer = combineReducers({
    contador:contadorReducer,
    contador2:contadorReducerClass,
    shopping:shoppingReducer,
    crud:crudReducer
})

export default reducer;