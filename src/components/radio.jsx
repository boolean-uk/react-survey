import PropTypes from 'prop-types';

export default function Radio({ answer, setAnswer }) {
    return (
        <ul>
            <li>
                <input
                    id="colour-one"
                    type="radio"
                    name="colour"
                    value="1"
                    checked={answer.colour === "1"}
                    onChange={(event) => {
                        setAnswer(prevState => ({
                            ...prevState,
                            [event.target.name]: event.target.value
                        }));
                    }}
                />
                <label htmlFor="colour-one">1</label>
            </li>
            <li>
                <input
                    id="colour-two"
                    type="radio"
                    name="colour"
                    value="2"
                    checked={answer.colour === "2"}
                    onChange={(event) => {
                        setAnswer(prevState => ({
                            ...prevState,
                            [event.target.name]: event.target.value
                        }));
                    }}
                />
                <label htmlFor="colour-two">2</label>
            </li>
            <li>
                <input
                    id="colour-three"
                    type="radio"
                    name="colour"
                    value="3"
                    checked={answer.colour === "3"}
                    onChange={(event) => {
                        setAnswer(prevState => ({
                            ...prevState,
                            [event.target.name]: event.target.value
                        }));
                    }}
                />
                <label htmlFor="colour-three">3</label>
            </li>
            <li>
                <input
                    id="colour-four"
                    type="radio"
                    name="colour"
                    value="4"
                    checked={answer.colour === "4"}
                    onChange={(event) => {
                        setAnswer(prevState => ({
                            ...prevState,
                            [event.target.name]: event.target.value
                        }));
                    }}
                />
                <label htmlFor="colour-four">4</label>
            </li>
        </ul>
    );
}

Radio.propTypes = {
    answer:
        PropTypes.shape(
            {
                username: PropTypes.string,
                colour: PropTypes.string,
                spendTime: PropTypes.arrayOf(PropTypes.string),
                review: PropTypes.string,
            }
        ),
    setAnswer: PropTypes.func
};
