import { useState } from "react";
import { Container } from "../../../../common/Container";
import { Wrapper, Flashcard, FlashcardContent } from "../../styled";
import { useSelector } from "react-redux";
import { selectFlashcards } from "../../flashcardsSlice";

const PractiseFlashcards = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const flashcards = useSelector(selectFlashcards);

    const handleFlip = () => {
        setIsFlipped(flip => !flip);
    };

    return (
        <Container>
            {flashcards.length === 0 ? (
                <p>You don't have flashcards yet</p>
            ) : (
                <>
                    <Wrapper $isFlipped={isFlipped} onClick={handleFlip}>
                        {!isFlipped && (
                            <Flashcard $isFlipped={isFlipped}>
                                <FlashcardContent>{flashcards[0].word}</FlashcardContent>
                            </Flashcard>
                        )}
                        {isFlipped && (
                            <Flashcard>
                                <FlashcardContent $isFlipped={isFlipped}>{flashcards[0].meaning}</FlashcardContent>
                            </Flashcard>
                        )}
                    </Wrapper>
                </>
            )}
        </Container>
    );
};

export default PractiseFlashcards;