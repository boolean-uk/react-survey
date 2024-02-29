

const RadioButtons = (props) => {

    const {handleChange, state} = props ?? {}

    return (
    <ul>
        <li>
            <input id="color-one" type="radio" name="color" value="1" checked={state.color === "1"} onChange={handleChange}/><label
            htmlFor="color-one"
            >1</label>
            
        </li>
        <li>
            <input id="color-two" type="radio" name="color" value="2" checked={state.color === "2"} onChange={handleChange}/><label
            htmlFor="color-two"
            >2</label>
            
        </li>
        <li>
            <input id="color-three" type="radio" name="color" value="3" checked={state.color === "3"} onChange={handleChange}/><label
            htmlFor="color-three"
            >3</label>
            
        </li>
        <li>
            <input id="color-four" type="radio" name="color" value="4" checked={state.color === "4"} onChange={handleChange}/><label
            htmlFor="color-four"
            >4</label>
            
        </li>
    </ul>
    )
}

export default RadioButtons;
