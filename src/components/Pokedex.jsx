import React from "react";
import { useState, useEffect } from "react";
import "./Pokedex.styles.css";

const Pokedex = () => {
  const [searchField, setSearchField] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemon] = useState(pokemons);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json"
    )
      .then((response) => response.json())
      .then((pokemons) => {
        setPokemons(pokemons);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch pokemons");
        setIsLoading(false);
      });
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
        <div className="text-center mt-5 mb-5">
          <h1 className="title-font">Pokedex Party</h1>
          <nav class="nav nav-pills nav-justified mt-4 gap-3">
            <a class="nav-link active" href="/pokedex">
              <p className="h4 mb-0 mt-0">Pokedex</p>
            </a>

            <a class="nav-link bg-white text-dark" href="/party">
              <p className="h4 mb-0 mt-0">Party</p>
            </a>
          </nav>
        </div>
        {isLoading && (
          <div>
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status"></div>
            </div>
          </div>
        )}
        {errorMessage && <div className="error">{errorMessage}</div>}
        {!isLoading && (
          <div>
            <div className="text-center mt-5 mb-5">
              <div>
                <h2 className="text-white search-font">
                  Search for a Pokemon:{" "}
                  <input
                    className={"search-box pokemon-search-box mt-3"}
                    type="search"
                    placeholder="Pokemon Name"
                    onChange={onSearchChange}
                  />
                </h2>
              </div>
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              {filteredPokemons.map((pokemon) => {
                const { english } = pokemon.name;
                const { id } = pokemon;
                return (
                  <div className="col mb-4">
                    <div key={id} className="card bg-dark text-white">
                      <div className="card-body">
                        <div class="row">
                          <div class="col">
                            <h5 className="card-title">{english}</h5>
                          </div>
                          <div class="col-auto">
                            <a href="/" class="text-decoration-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="white"
                                class="bi bi-info-circle"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                              </svg>
                            </a>
                          </div>
                        </div>

                        <h6 className="card-subtitle mb-2 text-muted">#{id}</h6>
                        <img
                          className="card-img-top"
                          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.toLocaleString(
                            "en-US",
                            {
                              minimumIntegerDigits: 3,
                            }
                          )}.png`}
                          alt={`pokemon ${english}`}
                        />
                        <div className="text-center mt-3 mb-3">
                          <button type="button" className="btn btn-secondary">
                            Add to Party
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokedex;
