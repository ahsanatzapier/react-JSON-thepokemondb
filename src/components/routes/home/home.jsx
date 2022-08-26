import React from "react";
import { useState, useEffect } from "react";
import "./home.styles.css";

import { Link } from "react-router-dom";

const Home = () => {
  const [searchField, setSearchField] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemon] = useState(pokemons);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isImgLoading, setImgLoading] = useState(true);

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
            <div className="text-center mb-5">
              <div className="search-container">
                <h2 className="text-white search-font">
                  Search For Your Favorite Pokemon <br></br>
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
                  <div key={id} className="col mb-4">
                    <div
                      key={id}
                      className="card card-hover bg-dark text-white"
                    >
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title">{english}</h5>
                          </div>
                          <div className="col-auto">
                            <Link
                              to={`/pokemon/${pokemon.name.english.toLowerCase()}`}
                              state={pokemon}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="white"
                                className="bi bi-info-circle"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                              </svg>
                            </Link>
                          </div>
                        </div>

                        <h6 className="card-subtitle mb-2 text-muted">#{id}</h6>

                        <div
                          style={{ display: isImgLoading ? "block" : "none" }}
                        >
                          <div>
                            <div className="d-flex justify-content-center">
                              <div
                                className="spinner-border"
                                role="status"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{ display: isImgLoading ? "none" : "block" }}
                        >
                          <img
                            className="card-img-top"
                            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.toLocaleString(
                              "en-US",
                              {
                                minimumIntegerDigits: 3,
                              }
                            )}.png`}
                            alt={`pokemon ${english}`}
                            onLoad={() => setImgLoading(false)}
                          />
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

export default Home;
