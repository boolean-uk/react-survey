import React, { useState, useEffect } from "react";
import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";

function Form({ addAnswer, editData, onCancelEdit }) {
  const initialFormData = {
    colour: "",
    timeSpent: [],
    review: "",
    username: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (editData) {
      // Set the form data based on the edit data
      setFormData(editData);
      // Check the checkboxes based on the edit data
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        const { name, value } = checkbox;
        if (editData.timeSpent.includes(value)) {
          checkbox.checked = true;
        } else {
          checkbox.checked = false;
        }
      });
    } else {
      setFormData(initialFormData);
      // Clear all checkboxes if there's no edit data
      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((checkbox) => {
          checkbox.checked = false;
        });
    }
  }, [editData]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addAnswer(formData);
    setFormData(initialFormData); // Reset the form data to initial state

    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: [...prevData[name], value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: prevData[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <h2>
          {editData
            ? "Edit Answer"
            : "Tell us what you think about your rubber duck!"}
        </h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <RadioButtons
            onChange={handleChange}
            selected={formData.colour || ""}
          />
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <Checkboxes
            onChange={handleChange}
            selected={formData.timeSpent || ""}
          />
        </div>
        <label>
          What else have you got to say about your rubber duck?
          <textarea
            name="review"
            cols="30"
            rows="10"
            value={formData.review || ""}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Put your name here (if you feel like it):
          <input
            type="text"
            name="username"
            value={formData.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Leave us your email pretty please??
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
          />
        </label>
        <input
          className="form__submit"
          type="submit"
          value={editData ? "Update Answer" : "Submit Survey!"}
        />
        {editData && <button onClick={onCancelEdit}>Cancel Edit</button>}
      </form>
    </div>
  );
}

export default Form;
