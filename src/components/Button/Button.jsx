import './Button.css'

const Button = ({children, color = "", ...props}) =>{
    return <button className={`button ${color}`} {...props}>{children}</button>
}

export default Button