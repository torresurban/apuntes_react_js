import React, { Fragment, useEffect, useState } from 'react'
import CrearTarea from './CrearTarea'
import EditarTarea from './EditarTarea'
import { helpHttp } from './helpers/helpHttp'

const ListaTareas = () => {

    const [tareas, setTareas] = useState([])
    const [error, setError] = useState(null)

    const url = 'http://localhost:5000/tareas'
    const api = helpHttp();

    //Mostrar o obtener las tareas
    const getTareas = async () => {
        try {
            const res = await api.get(url)

                    //console.log(res)
                    if(!res.err){
                        setTareas(res)
                        setError(null)
                    }else{
                        setTareas(null)
                        setError(res)
                    }
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTareas()
        // eslint-disable-next-line
    },[url])

    //Eliminar tarea
    const deleteTarea = async (id) => {
        try {
            let isDelete = window.confirm(`¿Estas seguro que deseas eliminar el registro con el id ${id}?`)

            if(isDelete){
                let endpoint = `${url}/${id}`
                let option = {
                    headers:{"Content-type":"application/json"}
                }
                const res = await api.del(endpoint, option)
                    if(!res.err){
                        let newData = tareas.filter(el => el.tareas_id !== id)
                        setTareas(newData)
                    }else{
                        setError(res)
                    }
            }else{
                return
            }
        } catch (err) {
            console.error(err.message)
        }
    }

    //crear tarea
    const crear = (data) => {
        
        setTareas([...tareas, data])
    }

    //editar tarea
    const editar = (data) => {
        let newData = tareas.map(el => el.id === data.id ? data : el)
        setTareas(newData)
    }

    return (
    <Fragment> 
        <CrearTarea crear={crear} />
        <table>
            <thead>
                <tr>
                    <th>Descripción</th>
                    <th>Dia</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {tareas.map(tarea => (
                    <tr key={tarea.tareas_id}>
                        <td>{tarea.descripcion}</td>
                        <td>{tarea.dia}</td>
                        <td><EditarTarea editar={editar}/></td>
                        <td><button onClick={() => deleteTarea(tarea.tareas_id)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
  )
}

export default ListaTareas