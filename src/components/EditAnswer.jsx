import { useState } from "react";
import './edit.css'
export default function EditAnswer({ closeModal, username, color, spendTime, review, submissionId, setSubmissions }) {
  const [editedUsername, setEditedUsername] = useState(username);
  const [editedColor, setEditedColor] = useState(color);
  const [editedSpendTime, setEditedSpendTime] = useState(spendTime);
  const [editedReview, setEditedReview] = useState(review);

  const handleSave = () => {
    setSubmissions((prevSubmissions) =>
      prevSubmissions.map((submission) =>
        submission.id === submissionId
          ? { ...submission, username: editedUsername, color: editedColor, spendTime: editedSpendTime, review: editedReview }
          : submission
      )
    );
    closeModal();
  };

  return (
    <div className="editWrap">
      <div className="editForm">
        <label>
          Username:
          <input
            type="text"
            value={editedUsername}
            onChange={(e) => setEditedUsername(e.target.value)}
          />
        </label>
        <label>
          Color Rating:
          <input
            type="text"
            value={editedColor}
            onChange={(e) => setEditedColor(e.target.value)}
          />
        </label>
        <label>
          How do you like to spend time with your rubber duck?
          <input
            type="text"
            value={editedSpendTime}
            onChange={(e) => setEditedSpendTime(e.target.value)}
          />
        </label>
        <label>
          Review:
          <textarea
            value={editedReview}
            onChange={(e) => setEditedReview(e.target.value)}
          />
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={closeModal}>Close</button>
      </div>

    </div>
  );
}
