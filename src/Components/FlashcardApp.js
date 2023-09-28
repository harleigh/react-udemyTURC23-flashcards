/* Project based on "steps" project from TURC23 */
import { Flashcard } from "./Flashcard";
import { flashcardData } from "../data";
import { useState } from "react";

export default function FlashcardApp() {
  const [selectedCard, setSelectedCard] = useState(null);

  const buildFlashcards = () => {
    return flashcardData.map((card) => {
      return (
        <Flashcard
          isFlipped={false}
          question={card.question}
          answer={card.answer}
          id={card.id}
          key={card.id}
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
