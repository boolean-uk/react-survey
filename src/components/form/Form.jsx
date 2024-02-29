import CheckBoxes from "./CheckBoxes";
import RadioButtons from "./RadoButtons";

const Form = (props) => {
    
    const {setAnswersList, answersList, state, setState, postState} = props ?? {};


    //Handles events in form and changes state accordingly
    const handleChange = (event) => {
        const {name, value, checked} = event.target;
        if(name === "spend-time" ) {
            setState({...state, timeSpent : {...state.timeSpent, [value] : checked}});
        } else {
            setState({...state, [name] : value})
        }

    }
    


    
    const onSubmit = (event) => {
        event.preventDefault();

        //Find if state exists in answersList
        const index = answersList.findIndex(item => item.id === state.id)


        //If state dosen't exist
        if(index !== -1) {
            //Update props in state found in answers
            setAnswersList(prevList => {
                const newList = [...prevList];
                newList[index] = {...prevList[index], 
                    color: state.color,
                    timeSpent: state.timeSpent,
                    username: state.username,
                    review: state.review,
                    email: state.email
                }
               
                return newList;
            })
            postState(state);
           
        } else {
            //Update id to be answersList.length
            setState(prevState => ({
                ...prevState,
                id: answersList.length,
            }));
            setAnswersList((prevList) => [...prevList, state]);
            postState(state);
            
        }


        //Reset form state to base values, making id increment
        const resetState = 
        {
            id: answersList.length + 1,
            color: "",
            timeSpent: {
                bathing: false,
                swimming: false,
                chatting: false,
                noTime: false,    
            },
            username: "",
            review: "",
            email: "",
        }
        setState(resetState)

    }




    return (
        
        <form className="form" onSubmit={onSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
                <RadioButtons handleChange={handleChange} state={state} />
            </div>
            <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
                <CheckBoxes handleChange={handleChange} state={state}/>
            </div>
            <label
            >What else have you got to say about your rubber duck?<textarea
                name="review"
                cols="30"
                rows="10"
                value={state.review}
                onChange={handleChange}
            ></textarea></label>
            <label
            >Put your name here (if you feel like it):<input
                type="text"
                name="username" 
                value={state.username}
                onChange={handleChange}/></label>
            <label
            >Leave us your email pretty please??<input
                type="email"
                name="email" 
                value={state.email}
                onChange={handleChange}/></label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    )
}

export default Form;
