import React from 'react'

export function CheckBoxes({input, setInput}) {

    const alterValue = (value) => {
        // check if value is in timeSpent, then remove or add
        if ( input.timeSpent.includes(value)){
            
            const index = input.timeSpent.indexOf(value);
            let alteredList = input.timeSpent;
            alteredList.splice(index, 1)

            setInput({...input, timeSpent: alteredList})
        }else{
            let alteredList = input.timeSpent;
            alteredList.push(value)
            setInput({...input, timeSpent: alteredList})
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
