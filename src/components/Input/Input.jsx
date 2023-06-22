import './Input.css'


const Input = ({label, placeholder, ...props}) => {
    return (
        <div className='input__wrapper'>
            <label className='label' htmlFor={label}>{label}</label>
            <input type='text' {...props} id={label} placeholder={placeholder}/>
        </div>
    )
}


export default Input