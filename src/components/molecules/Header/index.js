
import './styles.css'
import PropTypes from 'prop-types'
import Menu from '../../atoms/Menu'
const Header = () =>  {
  return (
    <header className='Header'>
        <div className="Container">
            <div className='Header__box'>
                <div className='Header__menu'>
                    <div className='Header__hamburguer'>
                        <span className='Header__hamburguerItem'></span>
                        <span className='Header__hamburguerItem'></span>
                        <span className='Header__hamburguerItem'></span>
                    </div>
                    <h1 className='Header__menuName'>Menu</h1>
                </div>
                
                <form className='Header__form'>
                    <label className='Header__label' htmlFor='search'>
                    <img className='Header__seachImg' src='seach.png' alt='icone'/>
                        <input className='Header__input' name='search' id='search' type='text'  placeholder={'O que você está procurando ?'}></input>
                    </label>
                </form>
                <img className='Header__logo' src='logo192.png' alt='logo'/>
                <div className='Header__weather'>
                    <img className='Header__weatherImage' src='cloud.png' alt='icone'/>
                    <div className='Header__weatherBox'>
                        <strong>rio de janeiro</strong>
                        <div className='Header__temp'>
                            <span className='Header__tempMin'>min 20º</span>
                            <span className='Header__tempMax'>max 28º</span>
                        </div>
                    </div>
                </div>
                <div className='Header__user'>
                    <img className='Header__notify' src='notify.png' alt='icone notify'/>
                    <div className='Header__userBox'>
                        <span className='Header__arrow'></span>
                        <img className='Header__userImg' src='user.png' alt='icone user'/>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
  </header>
  )
}

Header.propTypes = {
    infoColor: PropTypes.oneOf(['green' | 'blue' | 'purple'])
}

export default Header

