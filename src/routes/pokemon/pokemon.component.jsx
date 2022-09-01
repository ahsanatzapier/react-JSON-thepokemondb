import { useLocation, Link } from "react-router-dom";

import "./pokemon.styles.css";

const Pokemon = (props) => {
  const { state } = useLocation();
  // const { id, name, imageUrl, description, hp, attack, defense, speed } = state;
  console.log(state);

  const { id, description } = state;
  const { english } = state.name;
  const { HP, Attack, Defense, Speed } = state.base;

  const formattedNumber = id.toLocaleString("en-US", {
    minimumIntegerDigits: 3,
  });

  return (
    <section className="section pokemon-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{english}</h2>
      <div className="poke">
        <img
          className="card-image"
          alt={`pokemon ${english}`}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedNumber}.png`}
        />
        <div className="poke-info">
          <p>
            <span className="poke-data">ID :</span> {id}
          </p>
          <p>
            <span className="poke-data">Name :</span> {english}
          </p>
          <p>
            <span className="poke-data">Description :</span> {description}
          </p>
          <p>
            <span className="poke-data">HP:</span> {HP}
          </p>
          <p>
            <span className="poke-data">Attack:</span> {Attack}
          </p>
          <p>
            <span className="poke-data">Defense:</span> {Defense}
          </p>
          <p>
            <span className="poke-data">Speed:</span> {Speed}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Pokemon;
