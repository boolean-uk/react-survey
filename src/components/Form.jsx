import React, {useState} from 'react'
import PropTypes from 'prop-types'

Form.propTypes = {
    setAnswer: PropTypes.func,
    answers: PropTypes.array,
    formData: PropTypes.object,
    setFormData: PropTypes.func,
    selectedAnswerIndex: PropTypes.number,
    setSelectedAnswerIndex: PropTypes.func
}

function Form({answers, setAnswers,setFormData, formData, selectedAnswerIndex, setSelectedAnswerIndex}) {

    const handleInput = (event) =>{
        const {name, type, value} = event.target;
        if (name=== "color")
        {
            setFormData({...formData, color:value})
        }
        if (name ==="review"){
            setFormData({...formData, review:value})
        }
        if (name=== "email"){
            setFormData({...formData, email:value})
        }
        if (name ==="username"){
            setFormData({...formData, name:value})
        }
        if (name==="spend-time"){
            if (!formData.timeSpent.includes(value))
            {
                setFormData({...formData, timeSpent: [...formData.timeSpent, value]})
    
                //Add value to timespent array
            }
            else if (formData.timeSpent.includes(value))
            {
                setFormData({
                    ...formData,
                    timeSpent: formData.timeSpent.filter((t) => t !== value)
                  });

                //Remove value from timespent array
            }
        }
    }
      const handleSubmit = (event) => {
        event.preventDefault();
    
        if (selectedAnswerIndex !== null) {
          // Update the answer at the selected index
          setAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[selectedAnswerIndex] = formData;
            return updatedAnswers;
          });
        } else {
          // Add a new answer
          setAnswers((prevAnswers) => [...prevAnswers, formData]);
        }
    
        event.target.reset();
        setFormData({
          color: 0,
          timeSpent: [],
          review: "",
          name: "",
          email: "",
        });
    
        setSelectedAnswerIndex(null);
      };

    
    
  return (
    <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        
        <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
            <li>
                <input id="color-one" type="radio" name="color" value="1" checked={formData.color === '1'} onChange={handleInput} />
                <label htmlFor="color-one">1</label>
            </li>
            
            <li>
                <input id="color-two" type="radio" name="color" value="2" checked={formData.color === '2'} onChange={handleInput}/>
                <label htmlFor="color-two">2</label>
            </li>
            
            <li>
                <input id="color-three" type="radio" name="color" value="3" checked={formData.color === '3'} onChange={handleInput}/>
                <label htmlFor="color-three">3</label>
            </li>
            
            <li>
                <input id="color-four" type="radio" name="color" value="4" checked={formData.color === '4'} onChange={handleInput}/>
                <label htmlFor="color-four">4</label>
            </li>
            </ul>
        </div>
        
        <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
            <li>
                <label>
                <input name="spend-time" type="checkbox" value="swimming" 
                checked= {formData.timeSpent.includes('swimming')}
                onClick={handleInput}/>
                Swimming
                </label>
            </li>
            
            <li>
                <label>
                <input name="spend-time" type="checkbox" value="bathing" 
                checked= {formData.timeSpent.includes('bathing')}
                onClick={handleInput}/>
                Bathing
                </label>
            </li>
            
            <li>
                <label>
                <input name="spend-time" type="checkbox" value="chatting" 
                checked= {formData.timeSpent.includes('chatting')}
                onClick={handleInput}/>
                Chatting
                </label>
            </li>
            
            <li>
                <label>
                <input name="spend-time" type="checkbox" value="noTime" 
                checked= {formData.timeSpent.includes('noTime')}
                onClick={handleInput} />
                I don't like to spend time with it
                </label>
            </li>
            </ul>
        </div>
        
        <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" value={formData.review} onChange={handleInput}></textarea>
        </label>
        
        <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value={formData.name} onChange={handleInput}/>
        </label>
        
        <label>
            Leave us your email pretty please??
            <input type="email" name="email" value={formData.email} onChange={handleInput}/>
        </label>
        
        <input className="form__submit" type="submit" value="Submit Survey!"/>
    </form>
  )
}

export default Form