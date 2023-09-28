//
//an individual flashcard is responsible for notifying its parent when this flashcard is clicked
//   The parent component tells how this component should behave when clicked
export function Flashcard({ onClick, showAnswer, question, answer }) {
  const setClassName = () => {
    return showAnswer ? "answerSide" : "questionSide";
  };
  const setDisplay = () => {
    return showAnswer ? answer : question;
  };
  //this flashcard was selected so we will flip this card on the refresh
  return (
    <>
      <div className={setClassName()} onClick={onClick}>
        {setDisplay()}
      </div>
    </>
  );
}
