import React, { useState } from 'react'

const Formularios = () => {
    const [nombre, setNombre] = useState('')
    const [sabor, setSabor] = useState('')
    const [lenguaje, setLenguaje] = useState('')
    const [terminos, setTerminos] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('El formulario ha sido enviado')
    }

  return (
    <div>
        <h1>Formularios</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='nombre'>Nombre:</label>   {/* El atributo 'htmlFor' del label hace referencia al 'id' de su 'input' */}
            <input
                type='text'
                id='nombre'
                name='nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
                {/* pasamos la funcion que actualiza el estado(el nombre) 'setNombre' */}
                {/* (e)--> es el objeto que origina el evento en este caso es el 'input'  */}
                {/* (e.target) es el objeto origina el evento */}
                {/* (e.target.value) es el valor que el usuario esta escribiendo */}
            <p>Elige tu Sabor JS favorito:</p>
            <input
                type='radio'
                id='vanilla'
                name= "sabor"
                value='vanilla'
                onChange={(e) => setSabor(e.target.value)}
                defaultChecked
            />
            <label htmlFor='vanilla'>Vanilla</label>

            <input
                type='radio'
                id='react'
                name='sabor'
                value='react'
                onChange={(e) => setSabor(e.target.value)}
            />
            <label htmlFor='react'>React</label>

            <input
                type='radio'
                id='angular'
                name='sabor'
                value='angular'
                onChange={(e) => setSabor(e.target.value)}
            />
            <label htmlFor='angular'>Angular</label>

            <input
                type='radio'
                id='vue'
                name='sabor'
                value='vue'
                onChange={(e) => setSabor(e.target.value)}
            />
            <label htmlFor='vue'>Vue</label>

            <input
                type='radio'
                id='svelte'
                name='sabor'
                value='svelte'
                onChange={(e) => setSabor(e.target.value)}
            />
            <label htmlFor='svelte'>Svelte</label>

            <p>Elige tu lenguaje de programacion favorita:</p>
            <select
                name='lenguaje'
                onChange={(e) => setLenguaje(e.target.value)}
                defaultValue=""
            >
                <option value="">- - -</option>
                <option value="js">JavaScript</option>
                <option value="php">PHP</option>
                <option value="py">Python</option>
                <option value="go">GO</option>
                <option value="rb">Ruby</option>
            </select>
            <br />
                <label htmlFor='terminos'>Acepto tèrminos y condiciones</label>
                <input
                    type='checkbox'
                    id='terminos'
                    name='terminos'
                    onChange={(e) => setTerminos(e.target.checked)}
                />
            <br />
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Formularios

//los elementos del formulario esten gestionados por los estados de los componenetes --> formularios controlados

//Mediante la sintaxis de los puntos podemos acceder a los 'inputs' teniendo como referencia al formulario-->name='nombre'

//React recomienda crear una variable de estado para sus manejos y asignarsela al 'input'
// const [nombre, setNombre] = useState('')------> al 'input' en su atributo value={nombre}
//pero al crear el atributo 'value' del 'input' se debe crear el atributo 'onChange' en su 'input' para su manejo
//'onChange' recibe una funcion la cual manipula el cambio del estado