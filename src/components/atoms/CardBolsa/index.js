
import './styles.css'
import PropTypes from 'prop-types'
const CardBolsa = ({data}) =>  {
  return (
    <div className="CardBolsa">
        <h2 className='CardBolsa__title'>Bolsa</h2>
        <ul className='CardBolsa__list'>
            {
                data?.map((item)=> { 
                    return(
                        <li key={item.name} className='CardBolsa__box'>
                            <strong className='CardBolsa__name'>{item.name}</strong>
                            <span className={`CardBolsa__value CardBolsa__value--${item.color}`}>{item.value}</span>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

CardBolsa.propTypes = {
    list: PropTypes.array
}

export default CardBolsa

