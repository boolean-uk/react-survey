import CheckBoxes from "./CheckBoxes";
import RadioButtons from "./RadioButtons";
import { useState } from "react";

export default function Form(data) {
  const [tempData] = useState(data.userData);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(data.userData);

    for (const key in data.userData) {
      if (key === "eighthLine" && data.userData[key] === "") {
        continue;
      } else if (
        data.userData[key] === "" ||
        data.userData[key].length === 0 ||
        data.userData[key] === 0
      ) {
        alert("Please fill in all the fields");
        return;
      }
    }

    const updatedList = { ...data.listUserData };

    const indexToFind = data.userData.index; // Assuming userData contains the user's input
    const dataList = data.listUserData.data;

    let indexExists = false;
    for (const obj of dataList) {
      if (obj["index"] === indexToFind) {
        indexExists = true;
        break;
      }
    }

    if (indexExists) {
      console.log("Index exists");
      updatedList.data.forEach((element) => {
        if (element.index === indexToFind) {
          // Update the existing entry with new data
          element[
            "What would you say that are the best features of your rubber duck?"
          ] = data.userData.firstLine;
          element[
            "What would you say that are the worst bits of your rubber duck!"
          ] = data.userData.secondLine;
          element["How do you rate your rubberduck consistency?"] =
            data.userData.thirdLine;
          element["How do you rate your rubber duck colour?"] =
            data.userData.fourthLine;
          element["How do you rate your rubber duck logo?"] =
            data.userData.fifthLine;
          element["How do you like to spend time with your rubber duck"] =
            data.userData.sixthLine;
          element["What else have you got to say about your rubber duck?"] =
            data.userData.seventhLine;
          element["Put your name here (if you feel like it):"] =
            data.userData.eighthLine;
          element["Leave us your email pretty please??"] =
            data.userData.ninthLine;
        }
      });
    } else {
      // If the index doesn't exist, increment currentIndex and assign it to userData.index
      const newIndex = data.currentIndex + 1;
      data.setCurrentIndex(newIndex);
      data.userData.index = newIndex;

      // Add a new entry to the list with the new index
      updatedList.data.push({
        index: newIndex,
        "What would you say that are the best features of your rubber duck?":
          data.userData.firstLine,
        "What would you say that are the worst bits of your rubber duck!":
          data.userData.secondLine,
        "How do you rate your rubberduck consistency?": data.userData.thirdLine,
        "How do you rate your rubber duck colour?": data.userData.fourthLine,
        "How do you rate your rubber duck logo?": data.userData.fifthLine,
        "How do you like to spend time with your rubber duck":
          data.userData.sixthLine,
        "What else have you got to say about your rubber duck?":
          data.userData.seventhLine,
        "Put your name here (if you feel like it):": data.userData.eighthLine,
        "Leave us your email pretty please??": data.userData.ninthLine,
      });
    }

    // Update the state with the modified list
    data.setListUserData({ ...updatedList });
    data.setUserData({ ...tempData });
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group">
        <h3>
          1. What would you say that are the best features of your rubber duck?
        </h3>
        <CheckBoxes
          options={[
            "It's yellow!",
            "It squeaks!",
            "It has a logo!",
            "It's big!",
          ]}
          additionalProp={data}
          line={"firstLine"}
          name="like"
        />
      </div>
      <div className="form__group">
        <h3>
          2. What would you say that are the worst bits of your rubber duck!
        </h3>
        <CheckBoxes
          options={[
            "It's yellow!",
            "It squeaks!",
            "It has a logo!",
            "It's big!",
          ]}
          additionalProp={data}
          line={"secondLine"}
          name="dislike"
        />
      </div>
      <div className="form__group radio 23">
        <h3>3. How do you rate your rubberduck consistency?</h3>
        <RadioButtons
          options={["1", "2", "3", "4"]}
          additionalProp={data}
          line={"thirdLine"}
          name="consistency"
        />
      </div>
      <div className="form__group radio 24 ">
        <h3>4. How do you rate your rubber duck colour?</h3>
        <RadioButtons
          options={["1", "2", "3", "4"]}
          additionalProp={data}
          line={"fourthLine"}
          name="color"
        />
      </div>
      <div className="form__group radio 25">
        <h3>5. How do you rate your rubber duck logo?</h3>
        <RadioButtons
          options={["1", "2", "3", "4"]}
          additionalProp={data}
          line={"fifthLine"}
          name="logo"
        />
      </div>
      <div className="form__group">
        <h3>6. How do you like to spend time with your rubber duck</h3>
        <CheckBoxes
          options={[
            "Swimming",
            "Bathing",
            "Chatting",
            "I don't like to spend time with it",
          ]}
          additionalProp={data}
          line={"sixthLine"}
          name="spend-time"
        />
      </div>
      <label>
        7. What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={data.userData.seventhLine}
          onChange={(e) => {
            data.setUserData((prevUserData) => ({
              ...prevUserData,
              seventhLine: e.target.value,
            }));
          }}></textarea>
      </label>
      <label>
        8. Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={data.userData.eighthLine}
          onChange={(e) => {
            data.setUserData((prevUserData) => ({
              ...prevUserData,
              eighthLine: e.target.value,
            }));
          }}
        />
      </label>
      <label>
        9. Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={data.userData.ninthLine}
          onChange={(e) => {
            data.setUserData((prevUserData) => ({
              ...prevUserData,
              ninthLine: e.target.value,
            }));
          }}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
