export default function Form({initalInfo, formInfo, setformInfo, answersList, setanswersList, isEditing, setisEditing, editIndex}) {

    const handelChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const newInfo = {...formInfo}

        switch(name) {
            case 'spendTime':
                if (value==='swimming') {
                    if (newInfo.spendTime.includes('noTime')) {
                        newInfo.spendTime = []
                    }
                    if (newInfo.spendTime.includes('swimming')) {
                        newInfo.spendTime = newInfo.spendTime.filter((item) => item !== 'swimming')
                    } else {
                        newInfo.spendTime.push('swimming')
                    }
                }
                if (value==='bathing') {
                    if (newInfo.spendTime.includes('noTime')) {
                        newInfo.spendTime = []
                    }
                    if (newInfo.spendTime.includes('bathing')) {
                        newInfo.spendTime = newInfo.spendTime.filter((item) => item !== 'bathing')
                    } else {
                        newInfo.spendTime.push('bathing')
                    }
                }
                if (value==='chatting') {
                    if (newInfo.spendTime.includes('noTime')) {
                        newInfo.spendTime = []
                    }
                    if (newInfo.spendTime.includes('chatting')) {
                        newInfo.spendTime = newInfo.spendTime.filter((item) => item !== 'chatting')
                    } else {
                        newInfo.spendTime.push('chatting')
                    }
                }
                if (value==='noTime') {
                    if (newInfo.spendTime.includes('noTime')) {
                        newInfo.spendTime = []
                    } else {
                        newInfo.spendTime = []
                        newInfo.spendTime.push('noTime')
                    }      
                }
                break
            default:
                newInfo[name] = value
        }

        setformInfo(newInfo)
    }

    const handelSubmit = (event) => {
        if (isEditing) {
            event.preventDefault()
            setisEditing(false)
            answersList.splice(editIndex, 1, formInfo)
            setformInfo(initalInfo)
        } else {
            event.preventDefault()
            setanswersList([...answersList, formInfo])
            setformInfo(initalInfo)
        }
    }

    return (
        <form className="form" onSubmit={handelSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck color?</h3>
                <ul>
                    <li>
                        <input 
                            id="color-one"
                            type={"radio"}
                            name="color"
                            value={"1"}
                            checked={formInfo.color === '1'}
                            onChange={handelChange}>  
                        </input>
                        <label htmlFor="color-one">1</label>
                    </li>
                    <li>
                        <input 
                            id="color-two"
                            type={"radio"}
                            name="color"
                            value={"2"}
                            checked={formInfo.color === '2'}
                            onChange={handelChange}>  
                        </input>
                        <label htmlFor="color-two">2</label>
                    </li>
                    <li>
                        <input 
                            id="color-three"
                            type={"radio"}
                            name="color"
                            value={"3"}
                            checked={formInfo.color === '3'}
                            onChange={handelChange}>  
                        </input>
                        <label htmlFor="color-three">3</label>
                    </li>
                    <li>
                        <input 
                            id="color-four"
                            type={"radio"}
                            name="color"
                            value={"4"}
                            checked={formInfo.color === '4'}
                            onChange={handelChange}>  
                        </input>
                        <label htmlFor="color-four">4</label>
                    </li>
                </ul>
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck?</h3>
                <ul>
                    <li>
                        <label>
                            <input
                                name="spendTime"
                                type={"checkbox"}
                                value="swimming"
                                checked={formInfo.spendTime.includes('swimming')}
                                onChange={handelChange}>
                            </input>
                            Swimming
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                name="spendTime"
                                type={"checkbox"}
                                value="bathing"
                                checked={formInfo.spendTime.includes('bathing')}
                                onChange={handelChange}>
                            </input>
                            Bathing
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                name="spendTime"
                                type={"checkbox"}
                                value="chatting"
                                checked={formInfo.spendTime.includes('chatting')}
                                onChange={handelChange}>
                            </input>
                            Chatting
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                name="spendTime"
                                type={"checkbox"}
                                value="noTime"
                                checked={formInfo.spendTime.includes('noTime')}
                                onChange={handelChange}>
                            </input>
                            I don't like to spend time with it
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
                    value={formInfo.review}
                    onChange={handelChange}>
                </textarea>
            </label>
            <label>
                Put your name here (if you feel like it):
                <input
                    type={"text"}
                    name="username"
                    value={formInfo.username}
                    onChange={handelChange}>
                </input>
            </label>
            <label>
                Leave us your email pretty please??
                <input 
                    type={"email"}
                    name="email"
                    value={formInfo.email}
                    onChange={handelChange}>
                </input>
            </label>
            <input className="form__submit" type="submit" value={"Submit Survey!"}/>
        </form>
    )
}