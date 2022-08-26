import { useLocation, Link } from "react-router-dom";

import "./pokemon.styles.css";

const Pokemon = (props) => {
  const { state } = useLocation();
  const pokemon = state;
  return (
    <div class="container">
      <div class="row">
        <div class="col-md">
          <img
            className="image"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id.toLocaleString(
              "en-US",
              {
                minimumIntegerDigits: 3,
              }
            )}.png`}
            alt={`pokemon ${pokemon.name.english}`}
          />
        </div>
        <div class="col-md">
          <div className="card rounded-0 bg-dark text-white">
            <div className="card-body">
              <h1 className="card-title mb-3">{pokemon.name.english}</h1>
              <h6 className="card-subtitle mb-4 text-muted">#{pokemon.id}</h6>
              <p className="card-text mb-4">{pokemon.description}</p>
              <h5>
                <span class="badge text-bg-secondary me-2 mb-2">
                  HP: {pokemon.base.HP}
                </span>

                <span class="badge text-bg-secondary me-2 mb-2">
                  Attack: {pokemon.base.Attack}
                </span>

                <span class="badge text-bg-secondary me-2 mb-2">
                  Defense: {pokemon.base.Defense}
                </span>

                <span class="badge text-bg-secondary me-2 mb-2">
                  Speed: {pokemon.base.Speed}
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div class="button-container">
          <Link to="/">
            <button className="btn btn-dark btn-lg">
              <strong>Back to all Pokemon</strong>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
