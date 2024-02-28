import PropTypes from 'prop-types'


// Defining propsTypes:
SurveyForm.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  setAnswer: PropTypes.func,
  answers: PropTypes.object
};



export default function SurveyForm(props) {
    const {formData, setFormData, setAnswer, answers} = props;

    const _features = ["It's yellow!", "It squeaks", "It has logo", "It's big"]
    const _worstBits = ["It's yellow!", "It squeaks", "It has logo", "It's big"]
    const _consistencyRate = ["1","2","3","4"]
    const _colorRate = ["1","2","3","4"]
    const _logoRate = ["1","2","3","4"]
    const _timeSpent = ["swimming", "bathing", "chatting", "I don't like it!!"]

    // Handling the submit
    function handleSubmit(event) {
        event.preventDefault();
        const newId = answers.length > 0 ? Math.max(...answers.map((a) => a.id)) + 1 : 0;

        //spread the original anwser and add the new one
        setAnswer([...answers,
        { id: newId,
          username: formData.username,    
          colorRate: formData.colorRate,
          email: formData.email,
          features: formData.features,
          review: formData.review,
          timeSpent: formData.timeSpent
        },
      ]);
       // NEW EMPTY formdata when submit is pressed.
        setFormData({ 
        username: '',
        email: '',
        features: [],
        worstBits: [],
        consistency: 0,
        colorRate: 0,
        logoRate: 0,
        timeSpent: [],
        review: ''
        });    

        // Reset checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    
    }

    // Handling the input change
    function handleInputChange(event) {
    // getting the event's properties:
    const {name, type, value, checked} = event.target;
    
    // Handle checkbox:
        if (type === "checkbox") {
             const updatedInfo = {...formData}

            if (!checked) { //If uncheck -> remove the item
            // toggleAttribute(name, value)
            updatedInfo[name] = updatedInfo[name].filter(item => item !== value);

            } 
        else {
            updatedInfo[name] = [...(updatedInfo[name]), value];
            
        }
        setFormData(updatedInfo)

        }
        
        else if (type === "radio" || type === "textarea" || type === "text" || type === "email") {
            setFormData({ ...formData, [name]: value });        //Same functionality as: formData[name] = value!
        }
        

    
    }
        

    // const toggleAttribute = (objectName, attribute) => {
    //     // Create a new object with updated feature value
    //     // Toggle..
    //     const updatedFeatures = { ...formData[objectName], [attribute]: !formData[objectName][attribute] };
        
    //     // Update the formData state with the updated features
    //     setFormData({
    //         ...formData,
    //         [objectName]: updatedFeatures
    //     });
    // };

  return (
    <div>
        <form className="form" onSubmit={handleSubmit}>
            <h2> Tell us what you think about your rubber duck! </h2>
            {/* 1. check box */}
            <div className='form__group'>
                <h3> What would you say that are the best features of your rubber duck?</h3>
                <ul>
                    {_features.map((f, index) => (
                        <li key={`feature${index}`}>
                        <label
                        ><input
                        onChange={(e) => handleInputChange(e)}
                        name="features"
                        type="checkbox"
                        value={f}
                        // The line below is the condition if the check box is checked or not
                        //checked={isChecked}   // Similar to radio, but instead, keep track of all the checkboxes
                        />{f}</label
                        >
                    </li>
                ))}
                </ul>
            </div>

            {/* 2. check box */}
            <div className='form__group'>
                <h3> What would you say that are the worst bits of your rubber duck?</h3>
                <ul>
                    {_worstBits.map((f, index) => (
                        <li key={`worst${index}`}>
                        <label
                        ><input
                        onChange={handleInputChange}
                        name="worstBits"
                        type="checkbox"
                        value={f}
                        />{f}</label
                        >
                    </li>
                ))}
                </ul>
            </div>

                {/* 3. radio buttons */}
                {/* ALL RADIO SHOULD have the same name, as you will also use this attribute to identify the value in state */}
            <div className='form__group radio'>
                <h3> How do you rate your rubber duck consistency?</h3>
                <ul>
                    {_consistencyRate.map((r, index) => (
                        <li key={index}>
                        <input id={`consistency-${index}`} 
                        onChange={handleInputChange}        // This MUST comes before "checked"
                        type="radio"
                        name="consistency"
                        value={r} 
                        checked={formData.consistency === r}    //This  line check determined which of the checked box is checked
                          />
                        <label
                        // htmlFor is used with "label": should match id. This way you can click on the label also.
                        htmlFor={`consistency-${index}`}
                        >{r}</label>
                    </li>
                    ))}
                </ul>       
            </div>  

            <div className='form__group radio'>
                {/* 4. radio buttons */}
                <h3> How do you rate your rubber duck color? </h3>
                <ul>
                    {_colorRate.map((r, index) => (
                        <li key={index}>
                        <input id={`color-${index}`} 
                        onChange={handleInputChange}
                        type="radio"
                        name="colorRate" 
                        value={r} 
                        checked={formData.colorRate === r}
                        />
                       
                        <label
                        // htmlFor is used with "label": should match id. This way you can click on the label also.
                        htmlFor={`color-${index}`}
                        >{r}</label>
                    </li>
                    ))}
                </ul>    
            </div>
            

            {/* 5. radio buttons */}
            <div className='form__group radio'>

            <h3> How do you rate your rubber duck logo?</h3>
                <ul>
                    {_logoRate.map((r, index) => (
                        <li key={index}>
                        <input id={`logo-${index}`} 
                        onChange={handleInputChange}  
                        type="radio"
                        name="logoRate" 
                        value={r} 
                        checked={formData.logoRate === r}
                        />
                        <label
                        // htmlFor is used with "label": should match id. This way you can click on the label also.
                        htmlFor={`logo-${index}`}
                        >{r}</label>
                        </li>
                    ))}
                </ul>      
            </div>

            {/*6. check box */}
            <div className='form__group'>
                <h3> How do you like to spend time with your duck?</h3>
                <ul>
                    {_timeSpent.map((f, index) => (
                        <li key={`ha-${index}`}>
                        <label
                        ><input
                            onChange={handleInputChange}  
                            name="timeSpent"
                            type="checkbox"
                            value={f}
                        />{f}</label
                        >
                    </li>
                ))}
                </ul>
            </div>
            

            {/* 7. Text area */}
            <label>What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols="30"
                    rows="10"
                    placeholder="YOU CAN WRITE SOMETHING HERE!"
                    onChange={handleInputChange}
                    value={formData.review}
                >
                </textarea>
            </label>
            
             {/* 8. text input */}
            <label>Put your name here (if you feel like it):
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="username"
                    value={formData.username}
                />
            </label>
            
            {/* 9. text input */}
            <label>Leave us your email pretty please??
                <input
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    value={formData.email} //This attribute binds the value of the input field to the username
                />
            </label>

            {/* 9. submit input */}
            <input className="form__submit" type="submit" value="Submit Survey!" />

        </form>

      
    </div>
  )
}

