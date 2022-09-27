import React, { useState, useEffect } from 'react'

const Search = () => {
    //Setear los Hooks
    const[users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    //funcion para traer los datos de la API
    const url = 'http://localhost:5000/santos'

    const showData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setUsers(data)
    }

    //funcion de busqueda
    const busqueda = (e) => {
        setSearch(e.target.value)
    }

    //metodo de filtrado
    /* let results = []
    if(!search){
        results = users
    }else{
        results= users.filter(dato => dato.name.toLowerCase().includes(search.toLowerCase()))
    } */

    //metodo de filtrado 2
    const results = !search ? users : users.filter(dato => dato.name.toLowerCase().includes(search.toLowerCase()))


    useEffect(() => {
        showData()
    },[])
    return(
        <div>
            <h2>Componente de Búsqueda</h2>
            <input value={search} onChange={busqueda} type='text' placeholder='Búsqueda'></input>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelación</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.constellation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Search;