import { useState } from "react";
import { Container } from "../../../../common/Container";
import { Wrapper, Flashcard, FlashcardContent } from "../../styled";

const PractiseFlashcards = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(flip => !flip);
    };

    return (
        <Container>
            <Wrapper $isFlipped={isFlipped}>
                {!isFlipped && (
                    <Flashcard $isFlipped={isFlipped}>
                        <FlashcardContent>Przednia strona</FlashcardContent>
                    </Flashcard>
                )}
                {isFlipped && (
                    <Flashcard>
                        <FlashcardContent $isFlipped={isFlipped}>Tylna strona</FlashcardContent>
                    </Flashcard>
                )}
            </Wrapper>
            <button onClick={handleFlip}>Turn</button>
        </Container>
    );
};

export default PractiseFlashcards;