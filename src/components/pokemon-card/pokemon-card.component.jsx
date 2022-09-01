import { Link } from "react-router-dom";
import "./pokemon-card.styles.css";

const PokemonCard = ({ pokemon }) => {
  const { id } = pokemon;
  const { english } = pokemon.name;
  const name = english;

  const formattedNumber = id.toLocaleString("en-US", {
    minimumIntegerDigits: 3,
  });

  // console.log(pokemon);
  return (
    <article className="pokemon">
      <div className="img-container">
        <img
          className="card-image"
          alt={`pokemon ${name}`}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedNumber}.png`}
        />
      </div>
      <div className="pokemon-footer">
        <h3>{name}</h3>
        <h4>#{id}</h4>

        <Link
          to={`/pokemon/${name.toLowerCase()}`}
          className="btn btn-primary btn-details"
          state={pokemon}
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default PokemonCard;
