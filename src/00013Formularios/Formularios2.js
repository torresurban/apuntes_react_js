import React, { useState } from 'react'

const Formularios2 = () => {
    const [form, setForm] = useState({})

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value   /* e.target-->elemento que origino el evento */
            /* e.target.name --> estamos accediendo al nombre del input que esta cambiando */
            /* para que e.target.name se vuelva una propiedad del objeto tenemos q destructurarla-->[e.target.name] */
            /* se mezcla el objeto que ya trae el formulario con la propiedad convertida[e.target.name] y si ya detecta 
            que esta propiedad ya existe en el form o en el objeto que viene lo que hara es actualizarla con 
            e.target.value */
        })
    }

    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('El formulario ha sido enviado')
    }

  return (
    <div>
        <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elige tu Sabor JS Favorito:</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Elige tu lenguaje de programación favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
        
    </div>
  )
}

export default Formularios2