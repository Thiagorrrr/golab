
import './styles.css'
import PropTypes from 'prop-types'
const CardSlide = ({type}) =>  {
  return (
    <div className='CardSlide'>
        <input type = "checkbox" id={`Card${type}`} name = "slide"/>
        <div className='CardSlide__hide'> 
        
            <div className='CardSlide CardSlide__left'>
                <img className="CardSlide__img" src='imageB.png' alt='teste'/>
                <div className='CardSlide__boxText'> 
                    <span className={`CardSlide__info `}>tv e famosos</span>
                    <h2 className="CardSlide__description">Dolore duis consectetur ut nostrud minim elit voluptate consequat.</h2>
                    <label className='CardSlide__box CardSlide__box--left' htmlFor={`Card${type}`}> 
                    
                    </label>
                    <label className='CardSlide__box CardSlide__box--right' htmlFor={`Card${type}`}> 
                        
                    </label>
                </div>
            </div>
            <div className='CardSlide CardSlide__right'>
                <img className="CardSlide__img" src='imageV.png' alt='teste'/>
                <div className='CardSlide__boxText'> 
                    <span className={`CardSlide__info `}>futebol</span>
                    <h2 className="CardSlide__description">Dolore duis consectetur ut nostrud minim elit voluptate consequat.</h2>
                    <label className='CardSlide__box CardSlide__box--left' htmlFor={`Card${type}`}> 
                    
                    </label>
                    <label className='CardSlide__box CardSlide__box--right' htmlFor={`Card${type}`}> 
                        
                    </label>
                </div>
            </div>
        
        </div>
    </div>
  )
}

CardSlide.propTypes = {
    type: PropTypes.string
}

export default CardSlide

