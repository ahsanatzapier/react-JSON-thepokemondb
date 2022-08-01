

const CardContainer = ({ id, name }) => {
  const formattedNumber = id.toLocaleString('en-US', {
    minimumIntegerDigits: 3
  })

  return (
    <div class="col mb-4">
    <div key={id} className='card'>
    <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">#{id}</h6>
    <img class="card-img-top" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedNumber}.png`} alt={`pokemon ${name}`}/>

    </div>
    </div>
    </div>
  )
}

export default CardContainer
