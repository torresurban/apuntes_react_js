import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAction, readAllAction, updateAction, deleteAction, noAction } from '../actions/crud.actions'
import { helpHttp } from '../helpers/helpHttp'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader'
import Mensaje from './Mensaje'
 


const CrudApi = () => {

  //const [db, setDb] = useState(null)
  //const [state, dispatch] = useReducer(crudReducer, crudInitialState)
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const { db } = state.crud

  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  let api = helpHttp()
  let url= 'http://localhost:5000/santos'

  useEffect(() => {
    setLoading(true)
    api.get(url)
        .then(res => {
          //console.log(res)
          if(!res.err){
            //setDb(res)
            dispatch(readAllAction(res))
            setError(null)
          }else{
            //setDb(null)
            dispatch(noAction())
            setError(res)
          }

    setLoading(false)
        })
        // eslint-disable-next-line
  },[url, dispatch])

  const createData = (data) => {
    data.id = Date.now()
    console.log(data)

    let optiones = {
      body:data,
      headers:{'content-type':'application/json'}
    }

    api.post(url, optiones).then(res => {
      //console.log(res)
      if(!res.err){
        //setDb([...db, res])
        dispatch(createAction(res))
      }else{
        setError(res)
      }
    })
    
  }

  const updateData = (data) => {

    let endpoint = `${url}/${data.id}`
    console.log(endpoint)

    let optiones = {
      body:data,
      headers:{'content-type':'application/json'}
    }

    api.put(endpoint, optiones).then(res => {
      //console.log(res)
      if(!res.err){
        //let newData  = db.map(el => el.id === data.id ? data : el)
        //setDb(newData)
        dispatch(updateAction(res))
      }else{
        setError(res)
      }
    })
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(`??Estas seguro de eliminar el registro con el id ${id}?`)

    if(isDelete){
      let endpoint = `${url}/${id}`
      let optiones = {
        headers:{'content-type':'application/json'}
      }
      api.del(endpoint, optiones).then(res => {
        if(!res.err){
          //let newData = db.filter(el => el.id !== id)
          //setDb(newData)
          dispatch(deleteAction(id))
        }else{
          setError(res)
        }
      })
      
    }else{
      return
    }
  }
  return (
    <div>
        <h1>Crud Api</h1>
        <article className='grid-1-2'>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && <Mensaje msg={`Error ${error.status}: ${error.statusText}`} bgColor='#dc3545'/>}
        {db && <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />}
        </article>
    </div>
  )
}

export default CrudApi