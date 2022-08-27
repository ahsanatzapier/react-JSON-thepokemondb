import PokemonCard from "../pokemon-card/pokemon-card.component";

import "./pokemon-list.styles.css";

const PokemonList = ({ pokemons }) => {
  return (
    <section className="section">
      <h2 className="section-title">Pokemons</h2>
      <div className="cocktails-center">
        {pokemons.map((pokemon) => {
          const { id, name, imageUrl } = pokemon;
          return <PokemonCard key={id} pokemon={pokemon} />;
        })}
      </div>
    </section>
  );
};

export default PokemonList;
