export default function Radio({handleChange, formState }) {
    return (
        <ul>
            <li>
                <input id="color-one" type="radio" name="rating" value="1" 
                    onChange={handleChange}
                    checked={formState.rating === '1'}
                    />
                <label htmlFor="color-one">1</label>
            </li>
            <li>
                <input id="color-two" type="radio" name="rating" value="2"
                    onChange={handleChange}
                    checked={formState.rating === '2'}
                />
                <label htmlFor="color-two">2</label>
            </li>
            <li>
                <input id="color-three" type="radio" name="rating" value="3"
                    onChange={handleChange}
                    checked={formState.rating === '3'}
                />
                <label htmlFor="color-three">3</label>
            </li>
            <li>
                <input id="color-four" type="radio" name="rating" value="4"
                    onChange={handleChange}
                    checked={formState.rating === '4'}/>
                <label htmlFor="color-four">4</label>
            </li>
        </ul>
    )
}