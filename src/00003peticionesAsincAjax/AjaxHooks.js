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
    let url = 'https://pokeapi.co/api/v2/pokemon/'
    fetch(url)
    .then(res => res.json())
    .then(json => {
        json.results.forEach(el => {
            fetch(el.url)
            .then(res => res.json())
            .then(json => {
                let pokemon = {
                    id:json.id,
                    name:json.name,
                    avatar:json.sprites.front_default
                }

                setPokemon((pokemons) => [...pokemons, pokemon])
                
                
            })
        })
    })
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
