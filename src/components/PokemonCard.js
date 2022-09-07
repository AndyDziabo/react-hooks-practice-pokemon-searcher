import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [toggleImg, setToggleImg] = useState(true);
  function handleClick() {
    setToggleImg(!toggleImg);
  }
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={toggleImg ? pokemon.sprites.front : pokemon.sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
