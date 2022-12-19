import { useEffect, useState } from "react";

function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      const pokemonListResponse = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const pokemonListData = await pokemonListResponse.json();
      setPokemonList(pokemonListData.results);

      for (const pokemon of pokemonListData.results) {
        const pokemonInfoResponse = await fetch(pokemon.url);
        const pokemonInfoData = await pokemonInfoResponse.json();
        setPokemonInfo((prevPokemonInfo) => ({
          ...prevPokemonInfo,
          [pokemon.name]: pokemonInfoData,
        }));
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <h1>Pokemon Info</h1>
      {Object.keys(pokemonInfo).map((pokemonName) => (
        <div key={pokemonName}>
          <h2>{pokemonName}</h2>
          <p>Weight: {pokemonInfo[pokemonName].weight}</p>
          <p>Height: {pokemonInfo[pokemonName].height}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
