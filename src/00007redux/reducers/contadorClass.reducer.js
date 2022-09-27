import { DECRECLASS, INCRECLASS } from "../types/index.types"

const contadorReducerClass = (state = 0, action) =>{
    switch(action.type){
        case INCRECLASS:
            return state + 1
        case DECRECLASS:
            return state -= 1
        default:
            return state
    }
}

export default contadorReducerClass