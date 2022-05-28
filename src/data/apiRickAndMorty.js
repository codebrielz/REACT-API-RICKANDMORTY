import axios from "axios";

export const obtenerPersonajes = async(setPersonajesRickAndMorty) => {
    const personajesRickAndMorty = await axios.get("https://rickandmortyapi.com/api/character");
    return setPersonajesRickAndMorty(personajesRickAndMorty.data.results);
}

export const obtenerPersonajesById = async(setPersonaje, id) => {
    id = parseInt(id);

    console.log(id);
    const personajesRickAndMorty = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return setPersonaje(personajesRickAndMorty.data.results);
}