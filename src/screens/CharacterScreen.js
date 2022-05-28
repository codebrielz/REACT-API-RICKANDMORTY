import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerPersonajesById } from '../data/apiRickAndMorty';

export const CharacterScreen = () => {
    
    const [personaje, setPersonaje] = useState(null)

    let {id} = useParams();
    id = parseInt(id);
    console.log(id);
    obtenerPersonajesById(setPersonaje, id);
    console.log(personaje);
    

  return (
    <div>
        {/* {personaje !== null
          ? personaje.map((personaje) => (
              <h1 key={personaje.id} > {personaje.id}</h1>
            ))
          : "no hay personajes"} */}
    </div>
  )
}
