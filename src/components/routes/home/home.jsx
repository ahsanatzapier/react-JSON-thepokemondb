import React from "react";
import { useState, useEffect } from "react";

import PokemonList from "../../pokemon-list/pokemon-list.component";
import SearchContainer from "../../search-container/search-container.component";

import "./home.styles.css";

// import { addCollectionandDocuments } from "../../../utils/firebase/firebase.utils";
// import POKEMON_DATA from "../../../pokemon";

import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";

import { Link } from "react-router-dom";

const Home = () => {
  const [searchField, setSearchField] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemon] = useState(pokemons);
  const [isLoading, setIsLoading] = useState(false);
  const [isImgLoading, setImgLoading] = useState(true);

  // useEffect(() => {
  //   addCollectionandDocuments("pokemons", POKEMON_DATA);
  // }, []);

  useEffect((pokemons) => {
    setIsLoading(true);
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setPokemons(categoryMap.pokemon);
      setIsLoading(false);
    };
    getCategoriesMap(pokemons);
  }, []);

  // console.log(pokemons);

  useEffect(() => {
    const newFilteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.toLocaleLowerCase().includes(searchField);
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
        {isLoading && (
          <div>
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status"></div>
            </div>
          </div>
        )}
        {!isLoading && (
          <div>
            <SearchContainer onSearchHandler={onSearchChange} />
            <PokemonList pokemons={filteredPokemons} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
