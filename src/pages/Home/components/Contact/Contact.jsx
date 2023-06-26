import axios from "axios";
import {useState} from "react";
import Input from "src/components/Input/Input";
import PhoneInput from "src/components/PhoneInput/PhoneInput";
import Button from "src/components/Button/Button.jsx";
import {ReactComponent as ArrowRight} from "src/assets/images/arrow-right.svg";
import {API} from "src/config/config.js";
import './Contact.css'


const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null)

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        setLoading(true)
        const {name, phone_number, text} = evt.target.elements
        const request = {
            name: name.value,
            phone_number: phone_number.value,
            text: text.value
        }
        try {
            const data = await axios.post(API + '/applications/', request)
            if (data?.data) {
                name.value = null
                phone_number.value = null
                text.value = null
                setStatus('отправлено')
            } else {
                setStatus('ошибка')
            }
        } catch (e) {
            setStatus('ошибка')
        } finally {
            setLoading(false)
            setTimeout(() => {
                setStatus(null)
            }, 2000)
        }
    }
    return (
        <section className='contact' id='contact'>
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
                            <Button disabled={loading} color='black'>{status ? status : 'отправить'} <ArrowRight
                                className='submit-icon'/></Button>
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
