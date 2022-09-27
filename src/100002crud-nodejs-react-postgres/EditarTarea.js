import React, { useState, useEffect } from 'react'
import { helpHttp } from './helpers/helpHttp'


const api= helpHttp()
const url = 'http://localhost:5000/tareas'

const initialForm = {
    descripcion:'',
    dia:'',
    id:''
}


const EditarTarea = ({editar}) => {

    const [editing, setEditing] = useState(initialForm)
    console.log(editing)

    

    const updateEditing = async () => {
        

        try {
            let endpoint = `${url}/${editar.tareas_id}`
            console.log(endpoint)
            let optiones = {
                body:{descripcion:editing.descripcion, dia:editing.dia},
                headers:{"Content-type":"application/json"}
            }
            const res = await api.put(endpoint, optiones)
            console.log(res)
            

            
            
        } catch (err) {
            console.error(err.message)
        }

    }


  return (
    <div>
        <button onClick={() => updateEditing(editing)}>Editar</button>
    </div>
  )
}

export default EditarTarea