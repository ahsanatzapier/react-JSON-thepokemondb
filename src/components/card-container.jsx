const CardContainer = ({ id, name }) => {
  const formattedNumber = id.toLocaleString("en-US", {
    minimumIntegerDigits: 3,
  });

  return (
    <div class="col mb-4">
      <div key={id} className="card bg-dark text-white">
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">#{id}</h6>
          <img
            class="card-img-top"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedNumber}.png`}
            alt={`pokemon ${name}`}
          />
          <div className="text-center mt-3 mb-3">
            <button type="button" class="btn btn-secondary">
              Add to Party
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
