/* Project based on "steps" project from TURC23 */

//fun difference: This is done through components, and I tell the custom flashcard
//component how to behave when an on-click event occurs :)

import { Flashcard } from "./Flashcard";
import { flashcardData } from "../data";
import { useState } from "react";

//Purpose of the Flashcard app is to display all of the flashcards on the screen,
//and to show the correct side of the flashcard (whether question side or answer side)
//based on if the user selected said card (only one answer is shown at any time)
export default function FlashcardApp() {
  const [selectedCardId, setSelectedCardId] = useState(null);

  //how the flashcard is to behave when clicked
  const behaviourOnClick = (id) => {
    if (id === selectedCardId) {
      setSelectedCardId(null);
    } else {
      setSelectedCardId(id);
    }
  };

  const buildFlashcards = () => {
    return flashcardData.map((curCard) => {
      return (
        <Flashcard
          onClick={() => behaviourOnClick(curCard.id)}
          showAnswer={selectedCardId === curCard.id}
          question={curCard.question}
          answer={curCard.answer}
          key={curCard.id}
        />
      );
    });
  };
  return (
    <>
      <div className="flashcards">{buildFlashcards()}</div>
    </>
  );
}
