
import './styles.css'
import PropTypes from 'prop-types'
import CardImage from '../../atoms/CardImage';
const SectionCards = ({data}) =>  {
  return (
    <section className='SectionCards'> 
      {
        data.map((item)=> 
          <CardImage 
            key={item.id} 
            {...item}
            />
        )
      } 
    </section>
  )
}

SectionCards.propTypes = {
    data: PropTypes.array
}

export default SectionCards

