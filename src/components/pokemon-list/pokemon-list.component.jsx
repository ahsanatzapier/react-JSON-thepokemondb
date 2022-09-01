import PokemonCard from "../pokemon-card/pokemon-card.component";

import "./pokemon-list.styles.css";

const PokemonList = ({ pokemons }) => {
  return (
    <section className="section">
      <h2 className="section-title">Pokemons</h2>
      <div className="pokemons-center">
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </section>
  );
};

export default PokemonList;
