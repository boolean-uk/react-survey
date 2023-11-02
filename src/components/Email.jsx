function Email({ form, handleChange }) {
  return (
    <input
      onChange={(e) => handleChange(e)}
      type="email"
      name="email"
      value={form.email}
    />
  );
}

export default Email;
