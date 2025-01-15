import { useState } from "react";
import { Container } from "../../../../common/Container";
import { Wrapper, Counter, Flashcard, FlashcardContent, ButtonWrapper, Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { nextFlashcard, selectCurrentIndex, selectFlashcardsBySpecificCategory, selectGlobalCategories } from "../../flashcardsSlice";

const PractiseFlashcards = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    const flashcardsBySpecificCategory = useSelector((state) => selectFlashcardsBySpecificCategory(state, selectedCategory));
    const currentIndex = useSelector(selectCurrentIndex);
    const globalCategories = useSelector(selectGlobalCategories);

    const dispatch = useDispatch();

    const handleFlip = () => {
        setIsFlipped(flip => !flip);
    };

    const currentFlashcard = flashcardsBySpecificCategory[currentIndex];

    return (
        <Container>
            <select
                value={selectedCategory}
                onChange={({ target }) => setSelectedCategory(target.value)}
            >
                <option>Select Category</option>
                {globalCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            {selectedCategory === "" ? (
                <p>Please select category to practise.</p>
            ) : flashcardsBySpecificCategory.length === 0 ? (
                <p>No flashcards found for the selected category.</p>
            ) : (
                <Wrapper>
                    <Counter>{currentIndex + 1} / {flashcardsBySpecificCategory.length}</Counter>
                    <Flashcard $isFlipped={isFlipped} onClick={handleFlip}>
                        {!isFlipped && (
                            <div $isFlipped={isFlipped}>
                                <FlashcardContent>{currentFlashcard.word}</FlashcardContent>
                            </div>
                        )}
                        {isFlipped && (
                            <div>
                                <FlashcardContent $isFlipped={isFlipped}>{currentFlashcard.meaning}</FlashcardContent>
                            </div>
                        )}
                    </Flashcard>
                    <ButtonWrapper>
                        <Button onClick={() => dispatch(nextFlashcard(selectedCategory))}>Next</Button>
                        <Button onClick={handleFlip}>Flip</Button>
                    </ButtonWrapper>
                </Wrapper>
            )}
        </Container>
    );
};

export default PractiseFlashcards;