import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryWrapper, Category, Flashcards, Flashcard, Word, Wrapper, RemoveButton, EditSetButton } from "./styled";
import { removeFlashcard, selectCurrentCategory, selectFlashcardsByCategory, setCurrentCategory } from "../../flashcardsSlice";

const YourFlashcards = () => {
    const dispatch = useDispatch();
    const flashcards = useSelector(selectFlashcardsByCategory);
    const currentCategory = useSelector(selectCurrentCategory);
    const [isEdit, setIsEdit] = useState(false);

    const handleEditFlashcards = (category) => {
        dispatch(setCurrentCategory(category));
        setIsEdit(!isEdit)
    };

    const handleRemoveFlashcard = (flashcardId, category) => {
        dispatch(removeFlashcard({ flashcardId, category }))
    };

    return (
        <Wrapper>
            {Object.keys(flashcards).map(category => (
                <CategoryWrapper key={category}>
                    <Category>
                        {category}
                        <EditSetButton onClick={() => handleEditFlashcards(category)}>Edit set</EditSetButton>
                    </Category>
                    <Flashcards>
                        {flashcards[category].map((flashcard => (
                            <Flashcard>
                                {isEdit && currentCategory === category && (
                                    <RemoveButton
                                        onClick={() => handleRemoveFlashcard(flashcard.id, category)}
                                    >
                                        ✖
                                    </RemoveButton>
                                )}
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