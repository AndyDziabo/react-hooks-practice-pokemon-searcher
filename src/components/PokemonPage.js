import React, { useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => setPokemonList(data));
  }, []);

  function handleSubmitForm(pokemonData){
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemonData),
    })
      .then(res => res.json())
      .then(newPokemon => setPokemonList([...pokemonList, newPokemon]));
  }

  function handleQuery(newQuery) {
    setQuery(newQuery);
  }

  const pokemonToDisplay = pokemonList.filter((pokemon) => {
    if(query === false) return true;
    return pokemon.name.includes(query);
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmitForm={handleSubmitForm} />
      <br />
      <Search onQuery={handleQuery} />
      <br />
      <PokemonCollection pokemonList={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
