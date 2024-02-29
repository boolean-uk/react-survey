/* eslint-disable react/prop-types */
function Buttons({handleChange, prop}) {
    
    return ( 
        <ul>
            <li>
                <input 
                    id={`${prop}-one`} 
                    type="radio" 
                    name={prop}
                    value="1" 
                    onClick={handleChange}
                />
                <label htmlFor={`${prop}-one`} >1</label
                >
            </li>
            <li>
                <input 
                    id={`${prop}-two`} 
                    type="radio" 
                    name={prop}
                    value="2" 
                    onClick={handleChange}
                />
                <label htmlFor={`${prop}-two`} >2</label
                >
            </li>
            <li>
                <input 
                    id={`${prop}-three`} 
                    type="radio" 
                    name={prop}
                    value="3" 
                    onClick={handleChange}
                />
                <label htmlFor={`${prop}-three`} >3</label
                >
            </li>
            <li>
                <input 
                    id={`${prop}-four`}  
                    type="radio" 
                    name={prop}
                    value="4" 
                    onClick={handleChange}
                />
                <label htmlFor={`${prop}-four`} >4</label
                >
            </li>
        </ul>
     );
}

export default Buttons;