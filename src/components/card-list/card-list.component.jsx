import CardContainer from "../card-container/card-container.component";
import './card-list.styles.css'

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