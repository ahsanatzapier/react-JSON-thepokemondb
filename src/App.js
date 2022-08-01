import { useState, useEffect } from "react";
import "./App.css";

import CardList from "./components/card-list";
import SearchBox from "./components/search-box";

const App = () => {
  // hooks
  const [searchField, setSearchField] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemon] = useState(pokemons);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json"
    )
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons));
  }, []);

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
        {isLoading && (
          <div>
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status"></div>
            </div>
          </div>
        )}

        {!isLoading && (
          <div>
            <div className="text-center mt-5 mb-5">
              <h1 className="title-font">React Pokedex</h1>
              <SearchBox
                className="pokemon-search-box mt-3"
                placeholder="Pokemon Name"
                onSearchHandler={onSearchChange}
              />
            </div>

            <CardList pokemons={filteredPokemons} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
