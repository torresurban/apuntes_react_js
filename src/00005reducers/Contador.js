import { useReducer } from 'react'

const initialState = {contador:0}

const init = (initialState) => {
    return {
        contador:initialState.contador + 100
    }
}

const TYPES = {
    INCREMENT:'INCREMENTAR',
    INCREMENT_5:'INCREMENTAR_5',
    DECREMENT:'DECREMENTAR',
    DECREMENT_5:'DECREMENTAR_5',
    RESET:'RESETEO'
}

function reducer(state, action){
    switch (action.type) {
        case TYPES.INCREMENT:
            return {contador:state.contador + 1}
        case TYPES.INCREMENT_5:
            return {contador:state.contador + action.payload}
        case TYPES.DECREMENT:
            return {contador:state.contador - 1}
        case TYPES.DECREMENT_5:
            return {contador:state.contador - action.payload}
        case TYPES.RESET:
            return initialState
        default:
            return state;
    }
}

const Contador = () => {

    //const [contador, setContador] = useState(0)

    //destructuramos el estado o variable de estado'state' en este caso se sugiere que sea un objeto
    //y la funcion 'dispatch' que va despachar la actualizacion
    
    //useReducer recibe 3 parametros (reducer, initialState, init)
    //REDUCER -->function reducer(state, action)
    //la funcion reductora 'reducer' que la tenemos que definir fuera del componente
    //esta funcion si o si va retornar el estado (return state )
    //la funcion reductora recibe dos parametros '(state, action)'
    //(state, action): state-->es el estado anterior  action-->es un objeto, este objeto
    //internamente va tener un tipo de accion que se va ejecutar y adicionalmente puede
    //o no tener un payload(el concepto de payload es el valor que le estamos mandando para que modifique el estado)

    //INITIALSTATE -->const initialState = {contador:0}
    //es una variable
    //tambien se define fuera del componente
    //se sugiere que sea un objeto la cual contiene la varaible de estado

    //INIT
    //tambien se define fuera del componente const init = (initialState) => { }
    //permite hacer una transformacion al estado inicial
    //el parametro que siempre recibe es el valor inicial 'initialState'


    const [ state, dispatch ] = useReducer(reducer, initialState, init)

    //const sumar = () => setContador(contador + 1)
    const sumar = () => dispatch({type:'INCREMENTAR'})
    const sumar5 = () => dispatch({type:TYPES.INCREMENT_5, payload: 5})

    //const restar = () => setContador(valor => valor - 1)
    const restar = () => dispatch({type:'DECREMENTAR'})
    const restar5 = () => dispatch({type:TYPES.DECREMENT_5, payload: 5})

    const reset = () => dispatch({type:TYPES.RESET})

    return(
        <div>
            <h1>useReducer</h1>
            <h2>Contador</h2>
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

export default Contador;