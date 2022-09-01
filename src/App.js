import './App.css';
import CardBackImage from './components/atoms/CardBackImage';
import CardImage from './components/atoms/CardImage';
import CardSlide from './components/atoms/CardSlide';
import CardSlideFlow from './components/atoms/CardSlideFlow';
import Footer from './components/molecules/Footer';
import SectionCards from './components/molecules/SectionCards';
import SectionVideo from './components/molecules/SectionVideo';
import Header from './components/molecules/Header';
import SectionInfo from './components/molecules/SectionInfo';
const data = {
  contentFirst: {
    articleLeft: [
      {
        cardImage: [
          { 
            id: 0,
            infoColor: 'blue',
            type: 'landScape',
            hour: '5 min. há 24hrs',
            description: 'Eu elit ad labore eu aliqua in nisi irure qui aliqua.',
            img: 'image1.png',
            alt: 'imagem castelo',
            info: 'entreterimento'
          },
          { 
            id: 1,
            infoColor: 'blue',
            type: 'landScape',
            hour: '5 min. há 24hrs',
            description: 'Dolore duis consectetur ut nostrud minim elit.',
            img: 'image1.png',
            alt: 'imagem castelo',
            info: 'entreterimento'
          },
          { 
            id: 2,
            infoColor: 'purple',
            type: 'landScape',
            hour: '5 min. há 24hrs',
            description: 'Dolore duis consectetur ut nostrud minim elit.',
            img: 'image1.png',
            alt: 'imagem castelo',
            info: 'entreterimento'
          },
          { 
            id: 3,
            infoColor: 'purple',
            type: 'landScape',
            hour: '5 min. há 24hrs',
            description: 'Dolore duis consectetur ut nostrud minim elit.',
            img: 'image1.png',
            alt: 'imagem castelo',
            info: 'entreterimento'
          },
          { 
            id: 4,
            infoColor: 'purple',
            type: 'landScape',
            hour: '5 min. há 24hrs',
            description: 'Dolore duis consectetur ut nostrud minim elit.',
            img: 'image1.png',
            alt: 'imagem castelo',
            info: 'entreterimento'
          }
        ]
      }
    ],
    articleRight: [
      {
        mosaic: [
          { 
            id: 0,
            type: 'portraint',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'ney.png',
            infoColor: 'green',
            alt: 'imagem Neymar',
            info: 'entreterimento',
            title: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.'
          },
          { 
            id: 1,
            type: 'portraint',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'bolso.png',
            infoColor: 'yellow',
            alt: 'imagem presidente',
            info: 'economia',
            title: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.'
          },
        ]
      },
      {
        mosaic: [
          { 
            id: 0,
            type: 'portraint',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'image1.png',
            alt: 'imagem castelo',
            info: 'entreterimento',
            title: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.'
          },
          { 
            id: 1,
            type: 'portraint',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'image1.png',
            alt: 'imagem castelo',
            info: 'entreterimento',
            title: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.'
          },
          { 
            id: 2,
            type: 'landScape',
            hour: '5 min. há 24hrs',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'image1.png',
            alt: 'imagem castelo',
            info: 'entreterimento',
            title: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.'
          }
        ]
      },
      {
        cardImage: [
          { 
            id: 0,
            infoColor: 'purple',
            type: 'simple',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'image1.png',
            alt: 'imagem castelo',
            info: 'entreterimento'
          },
          { 
            id: 1,
            infoColor: 'green',
            type: 'simple',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'imageV.png',
            alt: 'imagem castelo',
            info: 'esporte'
          },
          { 
            id: 2,
            infoColor: 'blue',
            type: 'simple',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'imageB.png',
            alt: 'imagem castelo',
            info: 'Tv e famosos'
          },
          { 
            id: 3,
            infoColor: 'blue',
            type: 'simple',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'imageB.png',
            alt: 'imagem castelo',
            info: 'Tv e famosos'
          },
          { 
            id: 4,
            infoColor: 'blue',
            type: 'simple',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'imageB.png',
            alt: 'imagem castelo',
            info: 'Tv e famosos'
          }
        ]
      }
    ],
  },
  video: [
    { 
      id: 0,
      infoColor: 'blue',
      description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
      img: 'image1.png',
      alt: 'imagem castelo',
      info: 'entreterimento',
      title: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
      min: '3'
    },
    { 
      id: 1,
      infoColor: 'purple',
      description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
      img: 'imageV.png',
      alt: 'imagem castelo',
      info: 'entreterimento',
      title: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
      min: '5'
    },
    { 
      id: 2,
      infoColor: 'green',
      description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
      img: 'imageV.png',
      alt: 'imagem castelo',
      info: 'entreterimento',
      title: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
      min: '5'
    },
    { 
      id: 3,
      infoColor: 'purple',
      description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
      img: 'imageV.png',
      alt: 'imagem castelo',
      info: 'entreterimento',
      title: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
      min: '5'
    }
  ],
  contentSecond: {
    articleLeft: [
      {
        cardImage: [
          { 
            id: 0,
            infoColor: 'blue',
            type: 'landScape',
            hour: '5 min. há 24hrs',
            description: 'Eu elit ad labore eu aliqua in nisi irure qui aliqua.',
            img: 'image1.png',
            alt: 'imagem castelo',
            info: 'entreterimento'
          },
          { 
            id: 1,
            infoColor: 'blue',
            type: 'landScape',
            hour: '5 min. há 24hrs',
            description: 'Dolore duis consectetur ut nostrud minim elit.',
            img: 'image1.png',
            alt: 'imagem castelo',
            info: 'entreterimento'
          },
          { 
            id: 2,
            infoColor: 'purple',
            type: 'landScape',
            hour: '5 min. há 24hrs',
            description: 'Dolore duis consectetur ut nostrud minim elit.',
            img: 'image1.png',
            alt: 'imagem castelo',
            info: 'entreterimento'
          }
        ]
      }
    ],
    articleRight: [
      {
        cardImage: [
          { 
            id: 0,
            infoColor: 'green',
            type: 'simple',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'ney.png',
            alt: 'imagem neymar',
            info: 'entreterimento'
          },
          { 
            id: 1,
            infoColor: 'green',
            type: 'simple',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'imageV.png',
            alt: 'imagem vidal',
            info: 'esporte'
          },
          { 
            id: 2,
            infoColor: 'blue',
            type: 'simple',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'imageB.png',
            alt: 'imagem castelo',
            info: 'Tv e famosos'
          },
          { 
            id: 3,
            infoColor: 'blue',
            type: 'simple',
            description: 'Dolore duis consectetur ut nostrud minim elit voluptate consequat.',
            img: 'imageB.png',
            alt: 'imagem castelo',
            info: 'Tv e famosos'
          }
        ]
      }
    ],
  },
}
const App = () => (
  <>
    <Header/>
    <section className='ContentFirst'>
      <div className="Container">
        <article className='Article'>
          <div className='Article__left'> 
            <CardSlideFlow/>
          </div>
          <div className='Article__right'>
            <SectionCards data={data.contentFirst.articleRight[0].mosaic}/>
          </div>
        </article>
        <div className='Divider'></div>
        <article className='Article'>
          <div className='Article__left'>
            <div className='Article__BoxLeft'>
              {
                data.contentFirst.articleLeft[0].cardImage.map((item)=> 
                  <CardImage 
                    key={item.id} 
                    {...item}
                    />
                )
              }
            </div>
          
            <CardSlide type='First'/>
          </div>
          <div className='Article__right'>
            <section className='SectionMosaic'> 
              {
                data.contentFirst.articleRight[1].mosaic.map((item)=> 
                  <CardBackImage 
                    key={item.id} 
                    {...item}
                    />
                )
              } 
            </section>
            {
              data.contentFirst.articleRight[2].cardImage.map((item)=> 
                <CardImage 
                  key={item.id} 
                  {...item}
                  />
              )
            }         
          </div>
        </article>
      </div>
    </section>
    <section className='ContentVideo'>
      <div className='Container'>
        <SectionVideo data={data.video}/>
      </div>
    </section>
    <section className='ContentSecond'>
      <div className="Container">
        <article className='Article'>
          <div className='Article__left'> 
            <CardSlide type='Second'/>
          </div>
          <div className='Article__right'>
            <SectionInfo/>
          </div>
        </article>
        <article className='Article Article--gap'>
          <div className='Article__left'>
            <div className='Article__BoxLeft'>
              {
                data.contentSecond.articleLeft[0].cardImage.map((item)=> 
                  <CardImage 
                    key={item.id} 
                    {...item}
                    />
                )
              }
            </div>
          </div>
          <div className='Article__right'>
            {
              data.contentSecond.articleRight[0].cardImage.map((item)=> 
                <CardImage 
                  key={item.id} 
                  {...item}
                  />
              )
            }         
          </div>
        </article>
      </div>
    </section>
    <Footer/>
  </>
)

export default App;
