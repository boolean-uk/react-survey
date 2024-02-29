import PropTypes from 'prop-types'

function Input(props) {
    return (
        <>
        <input 
            id={props.id}
            type={props.type}
            name={props.name} 
            value={props.value}
            onChange={props.handleChange} 
            checked={props.checked}
        />
        <label htmlFor={props.name}>{props.value}</label>
        </>
    )
}

Input.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    handleChange: PropTypes.func,
    checked: PropTypes.bool,
}

export default Input