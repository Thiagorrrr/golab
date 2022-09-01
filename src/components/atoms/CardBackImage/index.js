
import './styles.css'
import PropTypes from 'prop-types'
const CardBackImage = ({type, hour, info, title, description, img, alt}) =>  {
  return (
    <div className={`CardBackImage ${type ? `CardBackImage--${type}`: ''}`}>
        <a className='CardBackImage__link' href="https://github.com">
            <img className="CardBackImage__img" src={img} alt={alt}/>
            <div className="CardBackImage__box">
                <span className="CardBackImage__info">{info}</span>
                <h2 className="CardBackImage__title">{title}</h2>
                { hour &&  <span className="CardBackImage__description">{description}</span> }
                { hour && <span className='CardBackImage__hour'>{hour}</span> }
            </div>
        </a>
    </div>
  )
}

CardBackImage.propTypes = {
    type: PropTypes.string,
    hour: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
    info: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string
}

export default CardBackImage

