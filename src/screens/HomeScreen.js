import React, { useEffect, useState } from "react";
import { CardRickAndMorty } from "../components/CardRickAndMorty";
import { obtenerPersonajes } from "../data/apiRickAndMorty";

export const HomeScreen = () => {

  const [personajesRickAndMorty, setPersonajesRickAndMorty] = useState(null);

  useEffect(() => {
  obtenerPersonajes(setPersonajesRickAndMorty);
}, [setPersonajesRickAndMorty]);

  return (
    <div className="home__body">
      <h3 className="header-title">API Rick And Morty</h3>
      <div className="home__content-card">
        {personajesRickAndMorty !== null
          ? personajesRickAndMorty.map((personaje) => (
              <CardRickAndMorty personaje={personaje} key={personaje.id} />
            ))
          : "no hay personajes"}
      </div>
    </div>
  );
};
