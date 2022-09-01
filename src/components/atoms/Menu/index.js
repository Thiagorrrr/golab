
import './styles.css'
import PropTypes from 'prop-types'
const data = [
  
  "Noticia",
  "Esportes",
  "entreterimento",
  "carros",
  "tv e famosos",
  "planeta",
  "economia",
  "saude"
]
const Menu = () =>  {
  return (
    <nav className="Menu">
      <ul className='Menu__list'>
        {
          data.map((item)=> <li key={item}><a className='Menu__link' href={`/${item}`}>{item}</a></li> )
        }
      </ul>
    </nav>
  )
}

Menu.propTypes = {
    infoColor: PropTypes.oneOf(['green' | 'blue' | 'purple'])
}

export default Menu

