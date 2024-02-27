/* eslint-disable react/prop-types */
const Checkbox = ({ value, title, onChange, formData }) => {
    return (
        <li>
            <label>
                <input
                    name="spentTime"
                    type="checkbox"
                    value={value}
                    onChange={onChange}
                    checked={
                        formData["spentTime"].includes(value) ? true : false
                    }
                />
                {title}
            </label>
        </li>
    );
};

export default Checkbox;
