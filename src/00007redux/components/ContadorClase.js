import React, { Component } from 'react'
import { connect } from "react-redux";
import { incrementCount, decrementCount } from "../actions/contador.actions";

class ContadorClase extends Component{
    render(){
        return(
            <div>
                <h1>Contador con Redux -- Componente de Clase</h1>
                <p>
                    Clikeados {this.props.contador2} veces
                    <button onClick={() => this.props.incrementCount()}>+</button>
                    <button onClick={() => this.props.decrementCount()}>-</button>
                </p>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        contador2: state.contador2
    }
}


const mapDispatchToProps = () => {
    return {
        incrementCount,
        decrementCount
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(ContadorClase)


























/* const Contador = () => {

    const state = useSelector( state => state)

    const dispatch = useDispatch()

    return(
        <>
            <h1>Contador</h1>
            <nav>
                <button onClick={() => dispatch(sumar5())}>+5</button>
                <button onClick={() => dispatch(sumar())}>+1</button>
                <button onClick={() => dispatch(reset())}>0</button>
                <button onClick={() => dispatch(restar())}>-1</button>
                <button onClick={() => dispatch(restar5())}>-5</button>
            </nav>
            <h3>{state.contador}</h3>
        </>
    )
}

export default Contador; */