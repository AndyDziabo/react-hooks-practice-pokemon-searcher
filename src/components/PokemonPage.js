import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => setPokemonList(data));
  }, []);

  function handleQuery(newQuery) {
    const queryResult = pokemonList.filter((pokemon) => pokemon.name.includes(newQuery));
    console.log(queryResult)
  }

  function handleAddPokemon(newPokemon) {
    setPokemonList([...pokemonList, newPokemon]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search onSearch={handleQuery}/>
      <br />
      <PokemonCollection pokemonList={pokemonList} />
    </Container>
  );
}

export default PokemonPage;
