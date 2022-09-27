import React, { useState } from 'react'
import EditarTarea from './EditarTarea'
import { helpHttp } from './helpers/helpHttp'


const api= helpHttp()
const url = 'http://localhost:5000/tareas' 



const initialForm = {
    descripcion:'',
    dia:'',
    id:''
}


const CrearTarea = ({crear, editar}) => {
    const [form, setForm] = useState(initialForm)
    

    const handleChange = (e) => {
        //console.log(e)
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
        
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (!form.descripcion || !form.dia) {
            alert('Tarea incompleta')
            return
        }
        try {
            let optiones = {
                body:{descripcion:form.descripcion, dia:form.dia},
                headers:{"Content-type":"application/json"}
            }
            const res = await api.post(url,optiones)

            if(!res.err){
                crear(res)
                setForm(form)
            }

            handleReset2()

        } catch (err) {
            console.error(err.message)
        }
     }

     const handleReset2 = (e) => {
        setForm(initialForm)
     }
  return (
    <div>
        <h1>CrearTarea</h1>
        <form onSubmit={onSubmitForm}>
                <input 
                    type='text'
                    name='descripcion'
                    onChange={handleChange}
                    value={form.descripcion}
                />
                <input 
                    type='text'
                    name='dia'
                    onChange={handleChange}
                    value={form.dia}
                />
                {/* <button>Agregar</button> */}
                <input type="submit" value="Agregar"/>
        </form>
    </div>
  )
}

export default CrearTarea