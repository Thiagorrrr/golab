
import './styles.css'
const CardSlideFlow = () =>  {
  return (
    <div className='CardSlideFlow'>
        <input type = "checkbox" id = "CardFlow" name = "slide"/>
        <div className='CardSlideFlow__hide'> 
        
            <div className='CardSlideFlow CardSlideFlow__left'>
                <span className="CardSlideFlow__flag">Covid-19</span>
                <img className="CardSlideFlow__img" src='imageF.png' alt='Mulher carnaval'/>
                <div className='CardSlideFlow__boxText'> 
                    <span className={`CardSlideFlow__info `}>Destaque</span>
                    <h2 className="CardSlideFlow__title">Dolore duis consectetur ut nostrud minim elit  voluptate consequat.</h2>
                    <h3 className="CardSlideFlow__description">Dolore duis consectetur ut nostrud minim elit voluptate consequat elit voluptate consequat.</h3>
                    <label className='CardSlideFlow__box CardSlideFlow__box--left' htmlFor= "CardFlow"> 
                    
                    </label>
                    <label className='CardSlideFlow__box CardSlideFlow__box--right' htmlFor= "CardFlow"> 
                        
                    </label>
                </div>
            </div>
            <div className='CardSlideFlow CardSlideFlow__right'>
                <span className="CardSlideFlow__flag">Futebol</span>
                <img className="CardSlideFlow__img" src='imageV.png' alt='Vidal jogador'/>
                <div className='CardSlideFlow__boxText'> 
                    <span className={`CardSlideFlow__info `}>Destaque</span>
                    <h2 className="CardSlideFlow__title">Dolore duis nostrud ut consectetur minim elit  voluptate consequat.</h2>
                    <h3 className="CardSlideFlow__description">Dolore duis consectetur ut nostrud minim elit voluptate consequat elit voluptate consequat.</h3>
                    <label className='CardSlideFlow__box CardSlideFlow__box--left' htmlFor= "CardFlow"> 
                    
                    </label>
                    <label className='CardSlideFlow__box CardSlideFlow__box--right' htmlFor= "CardFlow"> 
                        
                    </label>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default CardSlideFlow

