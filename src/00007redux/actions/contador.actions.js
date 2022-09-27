import { DECRECLASS, DECREMENT, DECREMENT_5, INCRECLASS, INCREMENT, INCREMENT_5, RESET } from "../types/index.types"

export const sumar = () => ({type:INCREMENT})

export const restar = () => ({type:DECREMENT})

export const sumar5 = () => ({type:INCREMENT_5, payload:5})

export const restar5 = () => ({type:DECREMENT_5, payload:5})

export const reset = () => ({type:RESET})


//ACTIONS CREATORS
//CONTADOR EN COMPONENTE DE CLASE USANDO  LOS MISMOS TYPES DE LA CAPARPETA 'types'
export const incrementCount = () => {
    return{
        type: INCRECLASS
    }
}

export const decrementCount = () => {
    return{
        type:DECRECLASS
    }
}