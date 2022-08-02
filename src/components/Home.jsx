import React from "react";
import oak from "../Images/oak.svg";

const Home = () => {
  return (
    <div className="container">
      <div className="text-center mt-5 mb-5">
        <h1 className="title-font">Pokedex Party</h1>
      </div>
      <div class="row">
        <div class="col-sm">
          {" "}
          <img src={oak} alt="oak" />
        </div>
        <div class="col-sm">
          <p className="h3 text-white">Hello there!</p>
          <p className="h3 text-white">Welcome to the world of Pokémon!</p>
          <a class="btn btn-primary" href="/pokedex" role="button">
            CREATE A NEW POKEMON PARTY
          </a>
          <p className="h3 text-white">
            Return to an existing pokemon party by entering a three word token.
          </p>
          <div>
            <input type="text" />
          </div>

          <button type="button" class="btn btn-primary">
            RETURN TO MY POKEMON PARTY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
