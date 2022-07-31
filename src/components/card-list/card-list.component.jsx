import { Component } from "react";
import './card-list.styles.css'

class CardList extends Component {
 

  render() {

    const { pokemons } = this.props

    return (
      <div className='card-list'>
        {pokemons.map((pokemon) => {
          const {english} = pokemon.name
          const {hires} = pokemon.image
          return (
            <div key={pokemon.id} className='card-container'>
              <img className='card-image' alt={`pokemon ${english}`} src={hires} width="150" height="150"/>
              <h2>{english}</h2>
            </div>
          )})}
      </div>
    )
  }
}

export default CardList