import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Container } from "../../../../common/Container";
import { Wrapper, Counter, Flashcard, FlashcardContent, ButtonWrapper, Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
    nextFlashcard,
    previousFlashcard,
    selectCurrentIndex,
    selectFlashcardsBySpecificCategory,
    selectGlobalCategories
} from "../../flashcardsSlice";

const PractiseFlashcards = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [dragging, setDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
    const [dragText, setDragText] = useState("");

    const flashcardsBySpecificCategory = useSelector((state) => selectFlashcardsBySpecificCategory(state, selectedCategory));
    const currentIndex = useSelector(selectCurrentIndex);
    const globalCategories = useSelector(selectGlobalCategories);

    const dispatch = useDispatch();

    useEffect(() => {
        if (globalCategories.length > 0 && !selectedCategory) {
            setSelectedCategory(globalCategories[0]);
        }
    }, [globalCategories, selectedCategory]);

    const handleFlip = () => {
        setIsFlipped(flip => !flip);
    };

    const onTouchStart = (event) => {
        const touchStartX = event.touches[0].clientX;
        const touchStartY = event.touches[0].clientY;
        setStartPosition({ x: touchStartX, y: touchStartY });
        setPosition({ x: 0, y: 0 });
        setDragText("");
        document.body.style.overflow = "hidden";
    };

    const onTouchMove = (event) => {
        const deltaX = event.touches[0].clientX - startPosition.x;
        const deltaY = event.touches[0].clientY - startPosition.y;

        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
            setDragging(true);
        }

        setPosition({
            x: deltaX,
            y: deltaY,
        });

        if (deltaX > 5) {
            setDragText("Next One");
        } else if (deltaX < -5) {
            setDragText("Previous One");
        } else {
            setDragText("");
        }
    };

    const onTouchEnd = () => {
        setDragging(false);

        if (position.x > 100) {
            setIsFlipped(false);
            dispatch(nextFlashcard(selectedCategory));
        }

        if (position.x < -100) {
            setIsFlipped(false);
            dispatch(previousFlashcard(selectedCategory));
        }

        document.body.style.overflow = "auto";
        setPosition({ x: 0, y: 0 });
        setDragText("");
    };

    const animatedStyle = useSpring({
        transform: `translate(${position.x}px, ${position.y}px)`,
        config: { tension: 1300, friction: 100 },
    });

    const currentFlashcard = flashcardsBySpecificCategory[currentIndex];

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
            ) : flashcardsBySpecificCategory.length === 0 ? (
                <p>No flashcards found for the selected category.</p>
            ) : (
                <Wrapper>
                    <Counter>{currentIndex + 1} / {flashcardsBySpecificCategory.length}</Counter>
                    <animated.div
                        style={animatedStyle}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {dragging ? (
                            <Flashcard $dragging={dragging} positionX={position.x}>
                                <FlashcardContent>{dragText}</FlashcardContent>
                            </Flashcard>
                        ) : (
                            <>
                                <Flashcard isFlipped={isFlipped} onClick={handleFlip}>
                                    {!isFlipped && (
                                        <FlashcardContent isFlipped={isFlipped}>
                                            {currentFlashcard.word}
                                        </FlashcardContent>
                                    )}
                                    {isFlipped && (
                                        <FlashcardContent isFlipped={isFlipped}>
                                            {currentFlashcard.meaning}
                                        </FlashcardContent>
                                    )}
                                </Flashcard>
                            </>
                        )}
                    </animated.div>
                    <ButtonWrapper>
                        <Button onClick={() => dispatch(previousFlashcard(selectedCategory))}>Previous</Button>
                        <Button onClick={handleFlip}>Flip</Button>
                        <Button onClick={() => dispatch(nextFlashcard(selectedCategory))}>Next</Button>
                    </ButtonWrapper>
                </Wrapper>
            )}
        </Container>
    );
};

export default PractiseFlashcards;
