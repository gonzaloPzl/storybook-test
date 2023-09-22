import PropTypes from "prop-types";
import "./Button.css"

const getClassName = (...args) => ["button", ...args].filter(Boolean).join(" ");

const Button = ({children, type}) => {
    return (  

        <button className={getClassName(type)}>
            {children}
        </button>
    );
}


Button.protoTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf("primary", "secondary", "danger")
}
 
export default Button;