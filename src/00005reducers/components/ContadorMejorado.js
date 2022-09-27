import { useReducer} from 'react'
import { TYPES } from '../actions/contadorActions'
import { contadorReducers, contadorInitialState, contadorInit } from '../reducers/contadorReducers'

const ContadorMejorado = () => {
    const [ state, dispatch ] = useReducer(contadorReducers, contadorInitialState, contadorInit)
    
    const sumar = () => dispatch({type:'INCREMENTAR'})
    const sumar5 = () => dispatch({type:TYPES.INCREMENT_5, payload: 5})
    
    const restar = () => dispatch({type:'DECREMENTAR'})
    const restar5 = () => dispatch({type:TYPES.DECREMENT_5, payload: 5})

    const reset = () => dispatch({type:TYPES.RESET})

    return(
        <div>
            <h1>useReducer</h1>
            <h2>Contador Mejorado Reducer</h2>
            <nav>
            <button onClick={sumar5}>+5</button>
            <button onClick={sumar}>+</button>
            <button onClick={reset}>0</button>
            <button onClick={restar}>-</button>
            <button onClick={restar5}>-5</button>
            </nav>
            <h3>{state.contador}</h3>
        </div>
    )
}

export default ContadorMejorado;