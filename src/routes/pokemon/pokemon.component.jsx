import { useLocation, Link } from "react-router-dom";

import "./pokemon.styles.css";

const Pokemon = (props) => {
  const { state } = useLocation();
  const { id, name, imageUrl, description, hp, attack, defense, speed } = state;

  return (
    <section className="section pokemon-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="poke">
        <img src={imageUrl} alt={name}></img>
        <div className="poke-info">
          <p>
            <span className="poke-data">ID :</span> {id}
          </p>
          <p>
            <span className="poke-data">Name :</span> {name}
          </p>
          <p>
            <span className="poke-data">Description :</span> {description}
          </p>
          <p>
            <span className="poke-data">HP:</span> {hp}
          </p>
          <p>
            <span className="poke-data">Attack:</span> {attack}
          </p>
          <p>
            <span className="poke-data">Defense:</span> {defense}
          </p>
          <p>
            <span className="poke-data">Speed:</span> {speed}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Pokemon;
