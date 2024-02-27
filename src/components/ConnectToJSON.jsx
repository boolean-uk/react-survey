const jsonURL = "http://localhost:3000"

function PostData(data){
    console.log("Posting data...", data)
    const URL = `${jsonURL}/forms`
    const postRequestOptions = {
      method : "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  
    fetch(URL, postRequestOptions).then((response) => {return response.json()}).then((newForm) => {console.log("POST Data: ", newForm)})
  }

function Delete(AnwserId){
  const requestOptions = {
    method: "DELETE",
  };

  const URL = `${jsonURL}/forms/${AnwserId}`;

  fetch(URL, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((deletedAnswer) => {
      console.log("DELETE /form json data:", deletedAnswer);

      // // 1. update local state by appending jsonData onto the tasks array
      // state.tasks.push(newTask);


    });
}

function EditAnswerJson(AnswerId, data){
  console.log("Edit task:", AnswerId)
  const postRequestOptions = {
    method: "PUT", 
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(data)
  }

  fetch(`${jsonURL}/forms/${AnswerId}`, postRequestOptions).then((response) => {
  return response.json();}).then((updatedAnswer) =>{
    console.log("Update answer: ", updatedAnswer);
  })

}

function GetAllData(setAnswers){
    let dataList = [];
    fetch(`${jsonURL}/forms`, {}).then((response) => {return response.json();}).then((jsonData)=>{
        console.log("GET DATA", jsonData);
        setAnswers(jsonData)
    })
    
  };
  export {
    PostData,
    GetAllData,
    Delete,
    EditAnswerJson
  }