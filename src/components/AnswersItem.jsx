import { useState } from "react";
import ReactModal from 'react-modal'
import EditAnswer from "./EditAnswer";

// const answersSet = {
//   swimming: "Swimming",
//   bathing: "Bathing",
//   chatting: "Chatting",
//   noTime: "I don't like to spend time with it"
// };

function ItemsList(list) {
  return (
    <ul>
      {list.list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}


// This is the main component being exported from this file
export default function AnswersItem({answerItem: { username, color, spendTime = [], review }, setSubmissions}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendTime} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <button onClick={openModal}>Edit</button>
        <ReactModal
          className="reactBox"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Answer"
        >
          <EditAnswer 
            closeModal={closeModal}
            username={username}
            color={color}
            spendTime={spendTime}
            review={review}
            setSubmissions={setSubmissions} // This prop must be passed down from the parent
          />
        </ReactModal>
      </article>
    </li>
  );
}

