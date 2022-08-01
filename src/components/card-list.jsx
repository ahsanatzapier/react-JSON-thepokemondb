import CardContainer from "./card-container";


const CardList = ({ pokemons }) => (
<div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
    {pokemons.map((pokemon) => {
      const { english } = pokemon.name
      const { id } = pokemon
      return (
        <CardContainer id={id} name={english} />
      )
    })}
  </div>
)

export default CardList