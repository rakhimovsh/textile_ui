import './Contact.css'
import Input from "src/components/Input/Input";
import PhoneInput from "src/components/PhoneInput/PhoneInput";
import Map from 'src/assets/images/map.png'


const Contact = () =>{
    return (
        <section className='contact'>
            <div className="container contact__container">
                <div className="contact__main">
                    <h2>
                        Оставьте свой контакт, и мы вам перезвоним
                    </h2>
                    <p>у нас есть бесплатные консультации от экспертов, чтобы ответить на ваши вопросы</p>
                    <form className='contact__form'>
                        <Input label='Имя:' placeholder='Ваше имя'/>
                        <PhoneInput label='Номер телефона:' placeholder='90 123 45 67'/>
                        <Input label='Комментарий:' placeholder='добавьте свой комментарий'/>
                    </form>
                </div>
                <div className="contact__map">
                    <a href='#'>
                        <div className='contact__map-image'>

                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}


export default Contact