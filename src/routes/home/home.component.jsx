import React from "react";
import { useState, useEffect } from "react";

import PokemonList from "../../components/pokemon-list/pokemon-list.component";
import SearchContainer from "../../components/search-container/search-container.component";
import "./home.styles.css";

const Home = () => {
  const [searchField, setSearchField] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemon] = useState(pokemons);

  useEffect((pokemons) => {
    // setIsLoading(true);
    fetch(
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json"
    )
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons));
  }, []);

  // console.log(pokemons);

  useEffect(() => {
    const newFilteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.english.toLocaleLowerCase().includes(searchField);
    });
    setFilteredPokemon(newFilteredPokemons);
  }, [pokemons, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <div className="container">
        <SearchContainer onSearchHandler={onSearchChange} />
        <PokemonList pokemons={filteredPokemons} />
      </div>
    </div>
  );
};

export default Home;
