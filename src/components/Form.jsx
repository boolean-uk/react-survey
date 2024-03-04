import React, {useState} from 'react'
import PropTypes from 'prop-types'

Form.PropTypes = {
    answers: PropTypes.array,
    setAnswers: PropTypes.func,
    formData: PropTypes.object,
    setFormData: PropTypes.func,
}

export default function Form({answers, setAnswers, formData, setFormData}) {

    const handleInput = (event) => {
        const {className, type, value} = event.target;
        if (className === "color") {
            setFormData({...formData, color:value})
        }
        if (className === "review") {
            setFormData({...formData, review:value})
        }
        if (className === "email") {
            setFormData({...formData, email:value})
        }
        if (className === "username") {
            setFormData({...formData, username:value})
        }
        if (className === "spend-time") {
            if (!formData.timeSpent.includes(value)) {
                setFormData({...formData, timeSpent: [...formData.timeSpent, value]})
            }
            else if (formData.timeSpent.includes(value)) {
                setFormData({...formData, timeSpent: formData.timeSpent.filter  ((t) => t !== value)})
            }
        }
    }

    const answersInput = (event) => {
        event.preventDefault()
        setAnswers((prevAnswers) => [...prevAnswers, formData])
        setFormData({
            color: 0,
            timeSpent: [],
            review: "",
            username: "",
            email: ""
        })
        event.target.reset()
    }
    

    return (
        <form class="form">
            <h2>Tell us what you think about your rubber duck!</h2>
            <div class="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <ul>
                    <li>
                        <input id="color-one" type="radio" className="color" value="1" checked={formData.color === '1'} onChange={handleInput} />
                        <label htmlFor="color-one">1</label>
                    </li>
                    <li>
                        <input id="color-two" type="radio" className="color" value="2" checked={formData.color === '2'} onChange={handleInput} />
                        <label htmlFor="color-two">2</label>
                    </li>
                    <li>
                        <input id="color-three" type="radio" className="color" value="3" checked={formData.color === '3'} onChange={handleInput} />
                        <label htmlFor="color-three">3</label>
                    </li>
                    <li>
                        <input id="color-four" type="radio" className="color" value="4" checked={formData.color === '4'} onChange={handleInput} />
                        <label htmlFor="color-four">4</label>
                    </li>
                </ul>
            </div>
            <div class="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <ul>
                    <li>
                        <label>
                        <input className="spend-time" type="checkbox" value="swimming" 
                        checked={formData.timeSpent.includes('swimming')}
                        onClick={handleInput}/>
                            Swimming
                        </label>
                    </li>
                    <li>
                        <label>
                        <input className="spend-time" type="checkbox" value="bathing" 
                        checked={formData.timeSpent.includes('bathing')}
                        onClick={handleInput}/>
                            Bathing
                        </label>
                    </li>
                    <li>
                        <label>
                        <input className="spend-time" type="checkbox" value="chatting" 
                        checked={formData.timeSpent.includes('chatting')}
                        onClick={handleInput}/>
                            Chatting
                        </label>
                    </li>
                    <li>
                        <label>
                        <input className="spend-time" type="checkbox" value="noTime" 
                        checked={formData.timeSpent.includes('noTime')}
                        onClick={handleInput}/>
                            I don't like spending time with it
                        </label>
                    </li>
                </ul>
            </div>
            <label>What else have you got to say about your rubber duck?
                <textarea className="review" cols="30" rows="10" value={formData.review} onChange={handleInput}></textarea>
            </label>
            <label>Put your name here (if you feel like it):
                <input type="text" className="username" value={formData.username} onChange={handleInput}/>
            </label>
            <label>Leave us your email pretty please??
                <input type="email" className="email" value={formData.email} onChange={handleInput} />
                </label>
            <input class="form__submit" type="submit" value="Submit Survey!" onClick={answersInput} />
        </form>
    )
}