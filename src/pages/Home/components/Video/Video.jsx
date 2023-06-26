import './Video.css'
import MockVideo from 'src/assets/images/mock-video.jpg'


const Video = () => {
    return (
        <section className='video' id='about'>
            <div className='container video__container'>
                <div className='video__desc'>
                    <p>Magic Materials — производитель текстиля и фурнитуры из Китая с доставкой по всей РФ и странам
                        СНГ. Сотрудничество с нами обеспечит вам бесперебойные поставки текстиля в указанный срок по
                        фиксированной цене.</p>
                    <span>более</span>
                    <h2> &gt;500 станков</h2>
                </div>
                <div className='video__src'>
                    <img src={MockVideo} alt='video'/>
                </div>
            </div>
        </section>
    )
}

export default Video