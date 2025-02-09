import { useDispatch, useSelector } from "react-redux";
import { CategoryWrapper, Category, Flashcards, Flashcard, Word, Wrapper } from "./styled";
import { removeFlashcard, selectFlashcardsByCategory, setCurrentCategory } from "../../flashcardsSlice";

const YourFlashcards = () => {
    const dispatch = useDispatch();
    const flashcards = useSelector(selectFlashcardsByCategory);

    const handleRemoveFlashcard = (flashcardId, category) => {
        dispatch(setCurrentCategory(category));
        dispatch(removeFlashcard({ flashcardId, category }))
    };

    return (
        <Wrapper>
            {Object.keys(flashcards).map(category => (
                <CategoryWrapper key={category}>
                    <Category>{category}</Category>
                    <Flashcards>
                        {flashcards[category].map((flashcard => (
                            <Flashcard>
                                <button onClick={() => handleRemoveFlashcard(flashcard.id, category)}>usuń</button>
                                <Word>
                                    {flashcard.word}
                                </Word>
                                <Word $second>
                                    {flashcard.meaning}
                                </Word>
                            </Flashcard>
                        )))}
                    </Flashcards>
                </CategoryWrapper>
            ))}
        </Wrapper>
    );
};

export default YourFlashcards;