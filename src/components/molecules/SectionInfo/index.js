
import './styles.css'
import CardBolsa from '../../atoms/CardBolsa'
import CardHoros from '../../atoms/CardHoros'
import CardMega from '../../atoms/CardMega'
const SectionInfo = () =>  {
    const data = {
        bolsa: {
            list:[ 
                {
                    color: 'blue',
                    name: 'Dólar comercial',
                    value: 'R$ 5,23'
                },
                {
                    color: 'blue',
                    name: 'Dólar turismo',
                    value: 'R$ 5,23'
                },
                {
                    color: 'blue',
                    name: 'Euro',
                    value: 'R$ 6,23'
                },
                {
                    color: 'red',
                    name: 'Ibovespa',
                    value: '-4,87%'
                }
            ]
        },
        mega: {
            list:[ 
                {
                    value: '01'
                },
                {
                    value: '05'
                },
                {
                    value: '12'
                },
                {
                    value: '23'
                },
                {
                    value: '32'
                },
                {
                    value: '44'
                }
            ]
        },
    }
  return (
    <section className="SectionInfo">
        <CardHoros/>
        <CardBolsa data={data.bolsa.list}/>
        <CardMega data={data.mega.list}/>
    </section>
  )
}

export default SectionInfo

