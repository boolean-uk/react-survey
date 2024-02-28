const url = "http://localhost:3000/answers"

export const getAnswers = async () => {
    const response = await fetch(url)
    const json = await response.json()
    return json
}

export const postAnswer = async (body) => {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type":"application/json; charset=UTF-8"
        },
    });
}

export const patchAnswer = async (id, body) => {
    const response = fetch(`${url}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            "Content-type":"application/json; charset=UTF-8"
        },
    });
    return response.json()
}

export const deleteAnswer = async (id) => {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE"
    })
    return response
}