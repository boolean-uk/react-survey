/* eslint-disable react/prop-types */
import Buttons from "./Buttons";
import UpperCheckboxes from "./UpperCheckboxes";

function Form({handleChange, surveyData, handleSubmit}) {


    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group">
                <h3>What would you say that are the best features of your rubber duck?</h3>
                <UpperCheckboxes handleChange={handleChange} surveyData={surveyData} prop="bestFeature"/>
            </div>
            <div className="form__group">
                <h3>What would you say that are the worst bits of your rubber duck?</h3>
                <UpperCheckboxes handleChange={handleChange} surveyData={surveyData} prop="worstBit"/>
            </div>

            <div className="form__group radio">
                <h3>How do you rate your rubber duck consistency?</h3>
                < Buttons handleChange={handleChange} prop="consistency" />
            </div>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                < Buttons handleChange={handleChange} prop="colour" />
            </div>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck logo?</h3>
                < Buttons handleChange={handleChange} prop="logo" />
            </div>

            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <ul>
                    <li>
                        <label>
                        <input
                            name="timeSpent"
                            type="checkbox"
                            value="swimming"
                            onChange={handleChange}
                            checked={surveyData.timeSpent.includes("swimming")}
                        />
                        Swimming
                        </label>
                    </li>
                    <li>
                        <label
                        ><input 
                            name="timeSpent"
                            type="checkbox" 
                            value="bathing" 
                            onChange={handleChange}
                            checked={surveyData.timeSpent.includes("bathing")}
                        />
                        Bathing
                        </label>
                    </li>
                    <li>
                        <label>
                        <input
                            name="timeSpent"
                            type="checkbox"
                            value="chatting"
                            onChange={handleChange}
                            checked={surveyData.timeSpent.includes("chatting")}
                        />
                        Chatting
                        </label>
                    </li>
                    <li>
                        <label>
                            <input 
                                name="timeSpent"
                                type="checkbox" 
                                value="noTime" 
                                onChange={handleChange}
                                checked={surveyData.timeSpent.includes("noTime")}
                            />
                        I dont like to spend time with it
                        </label>
                    </li>
                    </ul>
            </div>
            <label>
                What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols="30"
                    rows="10"
                    value={surveyData.review}
                    onChange={handleChange}
                >
                </textarea>
                </label>
            <label>
                Put your name here (if you feel like it):
                <input
                    type="text"
                    name="username"
                    value={surveyData.username}
                    onChange={handleChange}
                />
                </label>
            <label>
                Leave us your email pretty please??
                <input
                    type="email"
                    name="email"
                    value={surveyData.email}
                    onChange={handleChange}
                />
                </label
            ><input className="form__submit" type="submit" value="Submit Survey!" />
        </form>

      );
}

export default Form;