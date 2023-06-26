import axios from "axios";
import Input from "src/components/Input/Input";
import PhoneInput from "src/components/PhoneInput/PhoneInput";

import Button from "src/components/Button/Button.jsx";
import {ReactComponent as ArrowRight} from "src/assets/images/arrow-right.svg";
import {API} from "src/config/config.js";
import './Contact.css'


const Contact = () => {

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const {name, phone_number, text} = evt.target.elements
        const request = {
            name: name.value,
            phone_number: phone_number.value,
            text: text.value
        }
        const data = await axios.post(API+ '/applications/', request)
    }
    return (
        <section className='contact'>
            <div className="container contact__container">
                <div className="contact__main">
                    <h2>
                        Оставьте свой контакт, и мы вам перезвоним
                    </h2>
                    <p>у нас есть бесплатные консультации от экспертов, чтобы ответить на ваши вопросы</p>
                    <form className='contact__form' onSubmit={handleSubmit}>
                        <Input name='name' label='Имя:' placeholder='Ваше имя'/>
                        <PhoneInput name='phone_number' label='Номер телефона:' placeholder='90 123 45 67'/>
                        <Input name='text' label='Комментарий:' placeholder='добавьте свой комментарий'/>
                        <div>
                            <Button color='black'>отправить <ArrowRight className='submit-icon'/></Button>
                        </div>
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
