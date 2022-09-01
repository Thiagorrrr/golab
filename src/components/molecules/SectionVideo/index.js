
import './styles.css'
import PropTypes from 'prop-types'
import CardVideo from '../../atoms/CardVideo';
const SectionVideo = ({data}) =>  {
  return (
    <section className='SectionVideo'>
      <div className='SectionVideo__title'> Vídeos em destaque</div>
        <div className='SectionVideo__box'>
          {
            data.map((item)=>  <CardVideo key={item.id} {...item}/>)
          }
      </div>
    </section>
  )
}

SectionVideo.propTypes = {
  data: PropTypes.array
}

export default SectionVideo

