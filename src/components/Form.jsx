
function Form({submittedForms, setSubmittedForms, formData, setFormData, isEdited, setIsEdited}) {
    

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        if (type === 'checkbox') {
          const updatedSpendTime = checked
            ? [...formData.spendTime, value]
            : formData.spendTime.filter(item => item !== value)
            setFormData({ ...formData, [name]: updatedSpendTime })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }
    
    const handleSubmitt = (event) => {
        event.preventDefault()
        console.log(formData)
        console.log(isEdited)

        if(isEdited.editing){
            let forms = [...submittedForms]
            forms[isEdited.index] = formData
            setSubmittedForms(forms)
            setIsEdited({editing: false, index: -1})
        }
        else {
            setSubmittedForms([...submittedForms, formData]);
        }
        setFormData({ 
            color: '',
            spendTime: [],
            review: '',
            username: '',
            email: ''
        })
    }

  return (
    <>
        <form className="form">
            <h2>Tell us what you think about your rubber duck!</h2>
            <div class="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <ul>
                    <li>
                        <input id="color-one" type="radio" name="color" value="1" checked={formData.color.includes('1')} onChange={handleChange} /><label htmlFor="color-one">1</label>
                    </li>
                    <li>
                        <input id="color-two" type="radio" name="color" value="2" checked={formData.color.includes('2')} onChange={handleChange}/><label htmlFor="color-two">2</label>
                    </li>
                    <li>
                        <input id="color-three" type="radio" name="color" value="3" checked={formData.color.includes('3')} onChange={handleChange}/><label htmlFor="color-three">3</label>
                    </li>
                    <li>
                        <input id="color-four" type="radio" name="color" value="4" checked={formData.color.includes('4')} onChange={handleChange}/><label htmlFor="color-four">4</label>
                    </li>
                </ul>
            </div>
            <div class="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <ul>
                    <li>
                    <label>
                        <input name="spendTime" type="checkbox" value="swimming" checked={formData.spendTime.includes('swimming')} onChange={handleChange}/>Swimming</label>
                    </li>
                    <li>
                    <label><input name="spendTime" type="checkbox" value="bathing" checked={formData.spendTime.includes('bathing')} onChange={handleChange}/>Bathing</label>
                    </li>
                    <li>
                        <label>
                            <input name="spendTime" type="checkbox" value="chatting" checked={formData.spendTime.includes('chatting')} onChange={handleChange}/>Chatting
                        </label>
                    </li>
                    <li>
                    <label>
                        <input name="spendTime" type="checkbox" value="noTime" checked={formData.spendTime.includes('noTime')} onChange={handleChange}/>I don't like to spend time with it
                    </label>
                    </li>
                </ul>
            </div>
            <label>
                What else have you got to say about your rubber duck?
                <textarea name="review" cols="30" rows="10" value={formData.review} onChange={handleChange}></textarea>
            </label>
            <label>
                Put your name here (if you feel like it):
                <input type="text" name="username" value={formData.username} onChange={handleChange}/>
            </label>
            <label>
                Leave us your email pretty please??
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            </label>
            <input class="form__submit" type="submit" value="Submit Survey!" onClick={handleSubmitt}/>
        </form>
    </>
  )
}

export default Form