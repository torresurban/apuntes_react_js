import React, { useState, useEffect } from "react";

function Reloj({hora}){
    return <h3>{hora}</h3>
}

export default function ScrollHooks(){

    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        let temporizador;

        if(visible){
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000)
        }else {
            clearInterval(temporizador)
        }

        return () => {
            console.log('Fase de Desmontaje')
            clearInterval(temporizador)
        }
    }, [visible])


    return(
        <>
            <h1>Reloj con useEfect</h1>
            {visible && <Reloj hora={hora} />}
            <button onClick={() => setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>
        </>
    )
}