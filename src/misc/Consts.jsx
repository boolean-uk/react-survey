export const RATING_ANSWER_OPTIONS = [1,2,3,4,5]

export const SPEND_TIME_ANSWER_OPTIONS = {
    swimming: "Swimming",
    bathing: "Bathing",
    chatting: "Chatting",
    noTime: "I don't like to spend time with it"
  };

export const INITIAL_FORM_VALUES = {
    rating: -1,
    timeSpendingPreferences: [],
    additionalRemarks: "",
    name: "",
    email: "",
    validation: { isValidRating: false, isValidName: false, isValidEmail: false, isValidTimeSpendingPreferences: false, hasSubmitted: false, isSubmitting: false }
}
  