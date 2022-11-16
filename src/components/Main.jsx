import { useState } from "react";


function Main({initialFormState, formState, setFormState}) {
  const [open, setOpen] = useState(false); //Ignore this state

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submited', formState)
    setFormState(initialFormState)
  }

  const handleChange = (event) => {
    const targetValue = event.target.value
    const targetName = event.target.name
    const targetType = event.target.type
    const targetChecked = event.target.value
    
    if (targetName === 'best-features' && targetType==='checkbox') {
      setFormState({ ...formState, bestFeatures: targetValue })
    }
    
    if (targetName === 'worst-feature' && targetType==='checkbox') {
      setFormState({ ...formState, worstFeaturs: targetValue })
    }

    if (targetName === 'consistency') {
      setFormState({ ...formState, consistency: targetValue })
    }
    
    if (targetName === 'color') {
      setFormState({ ...formState, colour: targetValue })
    }

    if (targetName === 'logo') {
      setFormState({ ...formState, logo: targetValue })
    }

    if (targetName === 'spend-time' && targetType==='checkbox') {
      setFormState({ ...formState, spedTime: targetValue })
    }

    if (targetName === 'review') {
      setFormState({ ...formState, additional: targetValue })
    }

    if (targetName === 'username') {
      setFormState({ ...formState, name: targetValue })
    }

    if (targetName === 'email') {
      setFormState({ ...formState, email: targetValue })
    }
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>

      <section className="main__form">
        <form class="form" onSubmit={handleSubmit}>
          
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group">
          <h3> What would you say are the best features of your rubber duck</h3>
        <ul>
            <li>
              <label>
                <input
                  name="best-features"
                  type="checkbox"
                  value="It's Yellow"
                  checked={formState.bestFeatures}
                  onChange={handleChange}
                /> It's Yellow
              </label>
              
            </li>
            <li>
              <label>
                
                  <input 
                  name="best-features" 
                  type="checkbox" 
                  value="It's Squeaks" 
                  checked={formState.bestFeatures}
                  onChange={handleChange}/>
                  It's Squeaks
              </label>
              
            </li>
            <li>
              <label>
                <input
                  name="best-features"
                  type="checkbox"
                  value="It has a logo"
                  checked={formState.bestFeatures}
                  onChange={handleChange}
                /> It has a logo
                
              </label>
              
            </li>
            <li>
              <label>
                <input 
                name="best-features" 
                type="checkbox" 
                value="It is big"
                checked={formState.bestFeatures}
                onChange={handleChange} />
                It is big
              </label>
              
            </li>
          </ul>

          <h3> What would you say are the worst features of your rubber duck</h3>
        <ul>
            <li>
              <label>
                <input
                  name="worst-feature"
                  type="checkbox"
                  value="It's Yellow"
                  checked={formState.worstFeaturs}
                  onChange={handleChange}
                /> It's Yellow
              </label>
              
            </li>
            <li>
              <label>
                
                  <input 
                  name="worst-feature" 
                  type="checkbox" 
                  value="It's Squeaks" 
                  checked={formState.worstFeaturs}
                  onChange={handleChange}/>
                  It's Squeaks
              </label>
              
            </li>
            <li>
              <label>
                
                  <input
                  name="worst-feature"
                  type="checkbox"
                  value="It has a logo"
                  checked={formState.worstFeaturs}
                  onChange={handleChange}
                /> It has a logo.
                
              </label>
              
            </li>
            <li>
              <label>
                <input 
                name="worst-feature" 
                type="checkbox" 
                value="It is big" 
                checked={formState.worstFeaturs}
                onChange={handleChange}/>
                It is big
              </label>
              
            </li>
          </ul>
        </div>
        <div class="form__group radio">
          
          <h3>How do you rate your rubber duck consistency?</h3>
          {/* <!-- Radio inputs go here --> */}
          <ul>
            <li>
              <input 
              id="color-one" 
              type="radio" 
              name="consistency" 
              value="1" 
              checked={formState.consistency === '1'}
              onChange={handleChange}/>
              <label
                for="color-one">
                1
              </label>
              
            </li>
            <li>
              <input 
              id="color-two" 
              type="radio" 
              name="consistency" 
              value="2" 
              checked={formState.consistency === '2'}
              onChange={handleChange}/>
              <label
                for="color-two" >
                2

              </label>
              
            </li>
            <li>
              <input 
              id="color-three" 
              type="radio" 
              name="consistency" 
              value="3" 
              checked={formState.consistency === '3'}
              onChange={handleChange}/>
              <label
                for="color-three">
                3

                </label>
            
            </li>
            <li>
              <input 
              id="color-four" 
              type="radio" 
              name="consistency" 
              value="4" 
              checked={formState.consistency === '4'}
              onChange={handleChange}/>
              
              <label
                for="color-four">
                4
                </label>

            </li>
          </ul>  


          <h3>How do you rate your rubber duck colour?</h3>
          {/* <!-- Radio inputs go here --> */}
          <ul>
            <li>
              <input 
              id="color-one" 
              type="radio" 
              name="color" 
              value="1" 
              checked={formState.colour === '1'}
              onChange={handleChange}/>
              <label
                for="color-one">
                1
              </label>
              
            </li>
            <li>
              <input 
              id="color-two" 
              type="radio" 
              name="color" 
              value="2" 
              checked={formState.colour === '2'}
              onChange={handleChange}/>
              <label
                for="color-two" >
                2

              </label>
              
            </li>
            <li>
              <input 
              id="color-three" 
              type="radio" 
              name="color"
              value="3" 
              checked={formState.colour === '3'}
              onChange={handleChange}/>
              <label
                for="color-three">
                3

                </label>
            
            </li>
            <li>
              <input 
              id="color-four" 
              type="radio" 
              name="color" 
              value="4" 
              checked={formState.colour === '4'}
              onChange={handleChange}/>
              
              <label
                for="color-four">
                4
                </label>

            </li>
          </ul> 

          <h3>How do you rate your rubber duck logo?</h3>
          {/* <!-- Radio inputs go here --> */}
          <ul>
            <li>
              <input 
              id="color-one" 
              type="radio" 
              name="logo" 
              value="1" 
              checked={formState.logo === '1'}
              onChange={handleChange}/>
              <label
                for="color-one">
                1
              </label>
              
            </li>
            <li>
              <input 
              id="color-two"
              type="radio" 
              name="logo" 
              value="2" 
              checked={formState.logo === '2'}
              onChange={handleChange}/>
              <label
                for="color-two" >
                2

              </label>
              
            </li>
            <li>
              <input 
              id="color-three" 
              type="radio" 
              name="logo" 
              value="3" 
              checked={formState.logo === '3'}
              onChange={handleChange}/>
              <label
                for="color-three">
                3

                </label>
            
            </li>
            <li>
              <input 
              id="color-four" 
              type="radio" 
              name="logo"
              value="4" 
              checked={formState.logo === '4'}
              onChange={handleChange}/>
              
              <label
                for="color-four">
                4
                </label>

            </li>
          </ul>       
        </div>

        <div class="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          {/* <!-- checkboxes go here --> */}

          <ul>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="swimming"
                  checked={formState.spedTime}
                  onChange={handleChange}
                /> Swimming
              </label>
              
            </li>
            <li>
              <label>
                
                  <input 
                  name="spend-time" 
                  type="checkbox" 
                  value="bathing" 
                  checked={formState.spedTime}
                  onChange={handleChange}/>Bathing
              </label>
              
            </li>
            <li>
              <label>
                
                  <input
                  name="spend-time"
                  type="checkbox"
                  value="chatting"
                  checked={formState.spedTime}
                  onChange={handleChange}
                />Chatting
                
              </label>
              
            </li>
            <li>
              <label>
                <input 
                name="spend-time" 
                type="checkbox" 
                value="noTime" 
                checked={formState.spedTime}
                onChange={handleChange}/>I don't like to
                spend time with it
              </label>
              
            </li>
          </ul>


        </div>
        
        <label>What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10" 
            value={formState.additional}
            onChange={handleChange}>
          </textarea>
        </label>

        <label>
          Put your name here (if you feel like it):
          <input
            type="text"
            name="username"
            value={formState.name}
            onChange={handleChange}/>
        </label>

        <label>
          Leave us your email pretty please??
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}/>
            </label>

        <input class="form__submit" type="submit" value="Submit Survey!" />

        </form>
    </section>
    </main>
  );
}

export default Main;
