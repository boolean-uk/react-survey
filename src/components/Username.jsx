function Username({ form, handleChange }) {
  return (
    <input
      onChange={(e) => handleChange(e)}
      type="text"
      name="username"
      value={form.username}
    />
  );
}

export default Username