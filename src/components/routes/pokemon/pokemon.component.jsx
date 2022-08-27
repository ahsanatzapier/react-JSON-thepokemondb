import { useLocation, Link } from "react-router-dom";

import "./pokemon.styles.css";

const Pokemon = (props) => {
  const { state } = useLocation();
  const { id, name, imageUrl, description, hp, attack, defense, speed } = state;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={imageUrl} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">ID :</span> {id}
          </p>
          <p>
            <span className="drink-data">Name :</span> {name}
          </p>
          <p>
            <span className="drink-data">Description :</span> {description}
          </p>
          <p>
            <span className="drink-data">HP:</span> {hp}
          </p>
          <p>
            <span className="drink-data">Attack:</span> {attack}
          </p>
          <p>
            <span className="drink-data">Defense:</span> {defense}
          </p>
          <p>
            <span className="drink-data">Speed:</span> {speed}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Pokemon;
