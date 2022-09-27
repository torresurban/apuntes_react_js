import { useReducer } from "react";
import ProductItem from "./ProductItem";
import { shoppingInitialState, shoppingReducer } from "../reducers/shopping.reducers";
import CartItem from "./CartItem";
import { TYPES } from "../actions/shopping.actions";

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const { products, cart } = state
    
    const addToCart = (id) => {
        //console.log(id)
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
    }
    
    const deleteFromCart = (id, all=false) => {
        //console.log(id, all)
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
        } else {
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
        }
    }
    
    const cleanCart = () => {
        dispatch({type:TYPES.CLEAN_CART})
    }
    
    return(
        <div>
            <h1>Carrito Reducers</h1>
            <h3>Productos</h3>
            <article className="box grid-responsive">
                {products.map(product => <ProductItem key={product.id} data={product} addToCart={addToCart}/>)}
            </article>
            <h3>Carrito</h3>
            <article className="box">
                <button onClick={cleanCart}>Limpiar Carrito</button>
                {cart.map((item, index) => <CartItem key={index} data={item} deleteFromCart={deleteFromCart}/>)}
            </article>
        </div>
    )
}

export default ShoppingCart;