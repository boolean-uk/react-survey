Initial Plan

* Add form features to main.jsx, edit where needed
* Create formData state to store what's entered in the form
* Create answers state to store submitted data
* Submit function, stops page refresh and write current form content to answer state
* Add a unique ID to each submitted answer
* Clear the form
* Break page down in to smaller components

Editing Answers

edit button pressed =>
pass selected answer to formData =>
submit button pressed =>
find the current answer in answers state, give it changed values and run setAnswers

1 - pass an object of the current answer to the handleEditData function
2 - setFormData to be equal to that object
3 - set a state constant to show that we're editing an item
4 - on submit, check if that edit constant is true
5 - if it is, create a new answer list by mapping through the old answers
6 - when an answer is found with the same ID as the current formData, update the information