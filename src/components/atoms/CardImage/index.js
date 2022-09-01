
import './styles.css'
import PropTypes from 'prop-types'
const CardImage = ({type, infoColor, hour, alt, img, info, description}) =>  {
  return (
    <div className={`CardImage ${type ? `CardImage--${type}`: ''}`}>
        <a className='CardImage__link' href='https://github.com'>
            <img className="CardImage__img" src={img} alt={alt}/>
            <div className="CardImage__box">
                <span className={`CardImage__info ${infoColor ? `CardImage__info--${infoColor}`: ''}`}>{info}</span>
                <h2 className="CardImage__description">{description}</h2>
                { hour && <span className='CardImage__hour'>{hour}</span> }
            </div>
        </a>
    </div>
  )
}

CardImage.propTypes = {
    type: PropTypes.string,
    infoColor: PropTypes.string,
    hour: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
    info: PropTypes.string,
    description: PropTypes.string
}

export default CardImage

