import CardContainer from "./card-container";

const CardList = ({ pokemons }) => (
  <div className='card-list'>
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