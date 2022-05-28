import React from 'react'
import { Link } from 'react-router-dom'

export const CardRickAndMorty = ({personaje}) => {
  return (
    <div key={personaje.id} className="rickAndMorty__card">
                <img src={personaje.image} className="" />
                <div>
                  <p className="rickAndMorty__texto">
                    Nombre:{" "}
                    <span className="rickAndMorty__texto-editado">
                      {personaje.name}
                    </span>
                  </p>
                  <p className="rickAndMorty__texto">
                    genero:{" "}
                    <span className="rickAndMorty__texto-editado">
                      {personaje.gender}
                    </span>
                  </p>
                  <p className="rickAndMorty__texto">
                    especie:{" "}
                    <span className="rickAndMorty__texto-editado">
                      {personaje.species}
                    </span>
                  </p>
                  <p className="rickAndMorty__texto">
                    estado:{" "}
                    <span className="rickAndMorty__texto-editado">
                      {personaje.status}
                    </span>
                  </p>
                  <p className="rickAndMorty__texto">
                    localizacion:{" "}
                    <span className="rickAndMorty__texto-editado">
                      {personaje.location.name}
                    </span>
                  </p>
                  <p className="rickAndMorty__texto">
                    origen:{" "}
                    <span className="rickAndMorty__texto-editado">
                      {personaje.origin.name}
                    </span>
                  </p>
                  <Link to={`/${personaje.id}`} className="rickAndMorty__btn">Más información</Link>
                </div>
              </div>
  )
}
