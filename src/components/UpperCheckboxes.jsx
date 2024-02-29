/* eslint-disable react/prop-types */
function UpperCheckboxes({handleChange, surveyData, prop}) {
    return ( 
        <ul>
            <li>
               < label >
                <input 
                    id="yellow"
                    type="checkbox"
                    name={prop}
                    value="yellow"
                    onChange={handleChange}
                    checked={surveyData[prop].includes("yellow")}
                />
                Its yellow!</label>
                < label >
                <input 
                    id="squeaks"
                    type="checkbox"
                    name={prop}
                    value="squeaks"
                    onChange={handleChange}
                    checked={surveyData[prop].includes("squeaks")}
                />
                It squeaks!</label>
                < label >
                <input 
                    id="logo"
                    type="checkbox"
                    name={prop}
                    value="logo"
                    onChange={handleChange}
                    checked={surveyData[prop].includes("logo")}
                />
                It has a logo!</label>
                < label >
                <input 
                    id="big"
                    type="checkbox"
                    name={prop}
                    value="big"
                    onChange={handleChange}
                    checked={surveyData[prop].includes("big")}
                />
                Its big!</label>
            </li>
        </ul>
    );
}

export default UpperCheckboxes;