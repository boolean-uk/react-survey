import React from 'react'

export function RadioInput({ input, setInput }) {

    const setRadio = (num) => {
        setInput({...input, colour: num})
    }

    function onValueChange(event){
        setRadio(event.target.value)
    }

    return (
        <ul>
            <li>
                <input id="color-one" type="radio" name="color" value="1" checked={input.colour==1} onChange={onValueChange}/><label
                for="color-one"
                >1</label
                >
            </li>
            <li>
                <input id="color-two" type="radio" name="color" value="2" checked={input.colour==2} onChange={onValueChange} /><label
                for="color-two"
                >2</label
                >
            </li>
            <li>
                <input id="color-three" type="radio" name="color" value="3" checked={input.colour==3} onChange={onValueChange} /><label
                for="color-three"
                >3</label
                >
            </li>
            <li>
                <input id="color-four" type="radio" name="color" value="4" checked={input.colour==4} onChange={onValueChange} /><label
                for="color-four"
                >4</label
                >
            </li>
        </ul>
    )
}
