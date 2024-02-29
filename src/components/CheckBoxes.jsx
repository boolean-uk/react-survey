import React from 'react'

export function CheckBoxes({input, setInput}) {

    const alterValue = (value) => {
        // check if value is in timeSpent, then remove or add
        if ( input.timeSpent.includes(value)){

            setInput({...input, timeSpent: input.timeSpent.filter(elm => elm != value)})

        }else{
            setInput({...input, timeSpent: [...input.timeSpent, value]})
        }

    }

    function onValueChange(event){
        alterValue(event.target.value);
    }

    return (
        <ul>
            <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={onValueChange}
                    checked={input.timeSpent.includes("swimming")}
                />Swimming</label
                >
            </li>
            <li>
                <label
                ><input name="spend-time" 
                type="checkbox" 
                value="bathing" 
                onChange={onValueChange}
                checked = {input.timeSpent.includes("bathing")}/>Bathing</label
                >
            </li>
            <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={onValueChange}
                    checked={input.timeSpent.includes("chatting")}
                />Chatting</label
                >
            </li>
            <li>
                <label
                ><input name="spend-time" 
                type="checkbox" 
                value="noTime" 
                onChange={onValueChange}
                checked = {input.timeSpent.includes("noTime")}/>I don't like to
                spend time with it</label
                >
            </li>
        </ul>
    )
}
