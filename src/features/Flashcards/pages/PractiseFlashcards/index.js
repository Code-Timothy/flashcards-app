import { useState } from "react";
import { Container } from "../../../../common/Container";
import { Wrapper, Flashcard, FlashcardContent } from "../../styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFlashcards, nextFlashcard, selectCurrentIndex } from "../../flashcardsSlice";

const PractiseFlashcards = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const flashcards = useSelector(selectFlashcards);
    const currentIndex = useSelector(selectCurrentIndex);

    const dispatch = useDispatch();

    const handleFlip = () => {
        setIsFlipped(flip => !flip);
    };

    const currentFlashcard = flashcards[currentIndex] || {};

    return (
        <Container>
            {flashcards.length === 0 ? (
                <p>You don't have flashcards yet</p>
            ) : (
                <>
                    <Wrapper $isFlipped={isFlipped} onClick={handleFlip}>
                        {!isFlipped && (
                            <Flashcard $isFlipped={isFlipped}>
                                <FlashcardContent>{currentFlashcard.word}</FlashcardContent>
                            </Flashcard>
                        )}
                        {isFlipped && (
                            <Flashcard>
                                <FlashcardContent $isFlipped={isFlipped}>{currentFlashcard.meaning}</FlashcardContent>
                            </Flashcard>
                        )}
                    </Wrapper>
                    <button onClick={() => dispatch(nextFlashcard())}>Next</button>
                    <button onClick={handleFlip}>Flip the flishcard</button>
                </>
            )}
        </Container>
    );
};

export default PractiseFlashcards;