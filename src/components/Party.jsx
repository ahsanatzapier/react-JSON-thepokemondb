import React from "react";

const Party = () => {
  return (
    <div className="container">
      <div className="text-center mt-5 mb-5">
        <h1 className="title-font">Pokedex Party</h1>

        <nav class="nav nav-pills nav-justified mt-4 gap-4">
          <a class="nav-link bg-white text-dark" href="/pokedex">
            <p className="h4 mb-0 mt-0">Pokedex</p>
          </a>
          <a class="nav-link active" href="/party">
            <p className="h4 mb-0 mt-0">Party</p>
          </a>
        </nav>
      </div>

      <h1>Party Page</h1>
    </div>
  );
};

export default Party;
