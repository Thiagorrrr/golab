
import './styles.css'
import PropTypes from 'prop-types'
const CardMega = ({data}) =>  {
  return (
    <div className="CardMega">
        <h2 className='CardMega__title'>Mega Sena Nº 1011</h2>
        <img className='CardMega__logo' src='imageM.png' alt='logo mega'/> 
        <ul className='CardMega__list'>
            {
                data?.map((item)=> { 
                    return(
                        <li key={item.value}>
                            <span className='CardMega__value'>{item.value}</span>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

CardMega.propTypes = {
    list: PropTypes.array
}

export default CardMega

