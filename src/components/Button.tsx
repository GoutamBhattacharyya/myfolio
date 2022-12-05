const Button = (props:any) => {
    return (
        <button className={`myfolio-btn ${props.cssClass?props.cssClass:""}`}>
            {props.name}
        </button>
    )
}

export default Button;