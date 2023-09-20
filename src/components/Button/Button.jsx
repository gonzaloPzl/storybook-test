import PropTypes from "prop-types";


const Button = ({children}) => {
    return (  

        <button>
            {children}
        </button>
    );
}


Button.protoTypes = {
    children: PropTypes.string.isRequired
}
 
export default Button;