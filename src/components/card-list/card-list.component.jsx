import { Component } from "react";
import CardContainer from "../card-container/card-container.component";
import './card-list.styles.css'

class CardList extends Component {
 

  render() {

    const { pokemons } = this.props

    return (
      <div className='card-list'>
        {pokemons.map((pokemon) => {
          const {english} = pokemon.name
          const {hires} = pokemon.image
          const {id} = pokemon
          return (
            <CardContainer id={id} name={english} image={hires}/>
          )})}
      </div>
    )
  }
}

export default CardList