export const propertySetQualities = {
    color: "It's yellow!",
    sound: "It squeaks!",
    logo: "It has a logo!",
    size: "It's big!"
}

export const propertySetTime = {
    swimming: "Swimming",
    bathing: "Bathing",
    chatting: "Chatting",
    noTime: "I don't like to spend time with it"
};

export const ratingScale = [1,2,3,4]

export const defaultObject = {
    bestFeatures: Object.fromEntries(
        Object.keys(propertySetQualities).map((key) => [key,false])),
    nagFeatures: Object.fromEntries(
        Object.keys(propertySetQualities).map((key) => [key,false])),
    timeSpent: Object.fromEntries(
        Object.keys(propertySetTime).map((key) => [key,false])),
    consistencyRating: "",
    colourRating: "",
    duckRating: "",
    username: "",
    review: "",
    submitterEmail: "",
}