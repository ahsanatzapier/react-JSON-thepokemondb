const CardContainer = ({ id, name }) => {
  const formattedNumber = id.toLocaleString('en-US', {
    minimumIntegerDigits: 3
  })

  return (

    <div key={id} className='card-container'>
      <h1>#{id}</h1>
      <img className='card-image' alt={`pokemon ${name}`} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedNumber}.png`} width="150" height="150" />
      <h2>{name}</h2>
    </div>
  )
}

export default CardContainer
