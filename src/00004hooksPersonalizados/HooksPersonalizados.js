import React from 'react'
import { useFetch } from './hooks/useFetch'

export default function HooksPersonalizados(){
    //console.log(useFetch())
    let url = 'https://pokeapi.co/api/v2/pokemon/';
        url='https://jsonplaceholder.typicode.com/users'

    let { data, isPending, error } = useFetch(url)

    /* json.results.forEach(async el => {
        let res = await fetch(el.url),
            json = await res.json()
        
            let pokemon = {
                id:json.id,
                name:json.name,
                avatar:json.sprites.front_default
            }

            setPokemon((pokemons) => [...pokemons, pokemon])
    }) */
    return(
        <>
            <h2>Hooks Personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>{JSON.stringify(error)}</mark>
            </h3>
            <h3>
                <pre style={{ whiteSpace:'pre-wrap' }}>
                    <code>{JSON.stringify(data)}</code>
                </pre>
            </h3>
        </>
    )
}