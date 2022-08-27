import { Link } from "react-router-dom";
import "./pokemon-card.styles.css";

const PokemonCard = ({ pokemon }) => {
  const { id, name, imageUrl } = pokemon;
  return (
    <article className="pokemon">
      <div className="img-container">
        <img src={imageUrl} alt={name} />
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
