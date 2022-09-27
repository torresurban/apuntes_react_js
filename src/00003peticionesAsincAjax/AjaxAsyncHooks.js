import React, { useState, useEffect } from "react";

function Pokemon({ name, avatar }) {
  return (
    <figure>
      <img src={avatar} alt={name}></img>
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [ pokemons, setPokemon ] = useState([]);
  
  useEffect(() => {

    const getPokemons = async (url) => {
        let res = await fetch(url),
            json = await res.json()
            console.log(json)

            json.results.forEach(async el => {
                let res = await fetch(el.url),
                    json = await res.json()
                
                    let pokemon = {
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default
                    }
    
                    setPokemon((pokemons) => [...pokemons, pokemon])
            })
    }

    getPokemons('https://pokeapi.co/api/v2/pokemon/')
    
    //eslint-disable-next-line
  },[])
  
  return (
    <>
      <h1>Pokemo Hooks</h1>
      {pokemons.map(el => (
        <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
      ))}
    </>
  )
}