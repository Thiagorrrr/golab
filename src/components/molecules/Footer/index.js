
import './styles.css'
import PropTypes from 'prop-types'
const Footer = () =>  {
  return (
    <footer className="Footer">
        <div className='Footer__box'>
            <span className='Footer__rights'>© Copyright 2020 - 2021 - Todos os direitos reservados S.A.</span>
            <img className='Footer__logo' src='logoW192.png' alt='logo'/>
            <div className='Footer__links'>
                <a className='Footer__url' href='https://github.com'>Politica de privacidade</a>
                <a className='Footer__url' href='https://github.com'>Imprensa</a>
            </div>
        </div>
    </footer>
  )
}

Footer.propTypes = {
    infoColor: PropTypes.oneOf(['green' | 'blue' | 'purple'])
}

export default Footer

