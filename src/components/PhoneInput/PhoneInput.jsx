import './PhoneInput.css'


const telPattern = '[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'

const PhoneInput = ({label, placeholder, ...props}) => {
    return (
        <div className='phone-input__wrapper'>
            <label className='phone-input__label' htmlFor={label}>{label}</label>
            <div>
                <span className='phone-input__mask'>+998</span>
                <input type='number' {...props} id={label} placeholder={placeholder} pattern={telPattern}/>
            </div>
        </div>
    )
}


export default PhoneInput