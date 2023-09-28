export function Flashcard({ isFlipped, question, answer, id }) {
  const setClassName = () => {
    return isFlipped ? "selectedCard" : "flashcard";
  };
  const setDisplay = () => {
    return isFlipped ? answer : question;
  };
  return (
    <>
      <div className={setClassName()}>{setDisplay()}</div>
    </>
  );
}
