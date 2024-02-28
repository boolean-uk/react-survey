/* eslint-disable react/prop-types */
import '/src/App.css'
import { MultipleAnswers } from './MultipleAnswers'
import { MultipleChoice } from './MultipleChoice';
import { TextInput } from './TextInput';

export const SurveyForm = ({form, setForm, HandleSubmit}) => {
  return (
    <form className="form">
      <h2>Tell us what you think about your rubber duck!</h2>

      <MultipleAnswers option={form.colorRating} setForm={setForm} />

      <MultipleChoice options={form.spendTime} setForm={setForm} />

      <TextInput form={form} setForm={setForm} />

      <input
        className="form__submit"
        type="submit"
        value="Submit Survey!"
        onClick={(e) => {
          HandleSubmit(e);
        }}
      />
    </form>
  );
}