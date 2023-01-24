import AnswersItem from "./AnswersItem"

export default function AnswersList({answersList, setformInfo, initalInfo, isEditing, setisEditing, seteditIndex}) {

  return (
    <ul>
      {answersList.map((answerItem, index) => {
        console.table(answerItem)
        return <AnswersItem 
          answerItem={answerItem} 
          index={index}
          setformInfo={setformInfo}
          initalInfo={initalInfo} 
          isEditing={isEditing} 
          setisEditing={setisEditing}
          seteditIndex={seteditIndex}
          key={index} />
        })}
    </ul>
  )
}
