export const TextInput = ({ form, setForm }) => {
    return (
      <>
        <label>
          What else have you got to say about your rubber duck?
          <textarea
            name="review"
            cols="30"
            rows="10"
            value={form.text}
            onChange={(e) =>
              setForm((prevForm) => ({ ...prevForm, text: e.target.value }))
            }
          ></textarea>
        </label>
        <label>
          Put your name here (if you feel like it):
          <input
            type="text"
            name="username"
            value={form.name}
            onChange={(e) =>
              setForm((prevForm) => ({ ...prevForm, name: e.target.value }))
            }
          />
        </label>
        <label>
          Leave us your email pretty please??
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) =>
              setForm((prevForm) => ({ ...prevForm, email: e.target.value }))
            }
          />
        </label>
      </>
    );
}