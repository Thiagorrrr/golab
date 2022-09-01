
import './styles.css'
import PropTypes from 'prop-types'
const CardVideo = ({ infoColor, alt, img, info, title, min}) =>  {
  return (
    <div className="CardVideo">
        <a className='CardVideo__link' href='https://github.com'>
            <span className={`CardVideo__hour ${infoColor ? `CardVideo__hour--${infoColor}`: ''}`}>{`${min} min`}</span>
            <span className={`CardVideo__play ${infoColor ? `CardVideo__play--${infoColor}`: ''}`}> 
              <img className='CardVideo__playIcon' src='play.png' alt='icon play'/>
            </span>
            <img className="CardVideo__img" src={img} alt={alt}/>
            <div className="CardVideo__box">
                <span className={`CardVideo__info ${infoColor ? `CardVideo__info--${infoColor}`: ''}`}>{info}</span>
                <h2 className="CardVideo__title">{title}</h2>
            </div>
        </a>
    </div>
  )
}

CardVideo.propTypes = {
    infoColor: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
    info: PropTypes.string,
    title: PropTypes.string
}

export default CardVideo

