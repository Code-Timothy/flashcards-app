import { useState } from "react";
import { Container } from "../../../../common/Container";
import { Wrapper, Flashcard, FlashcardContent } from "../../styled";
import { useDispatch, useSelector } from "react-redux";
import { nextFlashcard, selectCurrentIndex, selectFlashcardsByCategory, selectGlobalCategories } from "../../flashcardsSlice";

const PractiseFlashcards = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    const flashcardsByCategory = useSelector((state) => selectFlashcardsByCategory(state, selectedCategory));
    const currentIndex = useSelector(selectCurrentIndex);
    const globalCategories = useSelector(selectGlobalCategories);

    const dispatch = useDispatch();

    const handleFlip = () => {
        setIsFlipped(flip => !flip);
    };

    const currentFlashcard = flashcardsByCategory[currentIndex];

    return (
        <Container>
            <select
                value={selectedCategory}
                onChange={({ target }) => setSelectedCategory(target.value)}
            >
                {globalCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            {selectedCategory === "" ? (
                <p>Please select category to practise.</p>
            ) : flashcardsByCategory.length === 0 ? (
                <p>No flashcards found for the selected category.</p>
            ) : (
                <>
                    <p>{currentIndex + 1} / {flashcardsByCategory.length}</p>
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
                    <button onClick={() => dispatch(nextFlashcard(selectedCategory))}>Next</button>
                    <button onClick={handleFlip}>Flip the flishcard</button>
                </>
            )}
        </Container>
    );
};

export default PractiseFlashcards;