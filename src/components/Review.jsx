function Review({ form, handleChange}) {

    return (
        <textarea
        onChange={e => handleChange(e)}
        name="review"
        value={form.review}
        cols="30"
        rows="10"
    >
    </textarea>
    )
}

export default Review