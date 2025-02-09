import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryWrapper, Category, Flashcards, Flashcard, Word, Wrapper, RemoveButton, EditSetButton } from "./styled";
import { editMeaning, editWord, removeFlashcard, selectCurrentCategory, selectFlashcardsByCategory, setCurrentCategory } from "../../flashcardsSlice";

const YourFlashcards = () => {
    const dispatch = useDispatch();
    const flashcards = useSelector(selectFlashcardsByCategory);
    const currentCategory = useSelector(selectCurrentCategory);
    const [isEditSet, setIsEditSet] = useState(false);
    const [isEditing, setIsEditing] = useState({});
    const [editedWords, setEditedWords] = useState({});
    const [editedMeanings, setEditedMeanings] = useState({});

    const handleEditSetFlashcards = (category) => {
        dispatch(setCurrentCategory(category));
        setIsEditSet(!isEditSet)
    };

    const handleRemoveFlashcard = (flashcardId, category) => {
        dispatch(removeFlashcard({ flashcardId, category }))
    };

    const handleEditFlashcard = (flashcardId) => {
        setIsEditing({
            ...isEditing,
            [flashcardId]: !isEditing[flashcardId],
        });
    };

    const handleWordChange = (flashcardId, event) => {
        setEditedWords({
            ...editedWords,
            [flashcardId]: event.target.value,
        });
    };

    const handleMeaningChange = (flashcardId, event) => {
        setEditedMeanings({
            ...editedMeanings,
            [flashcardId]: event.target.value,
        });
    };

    const handleSaveWord = (flashcardId, category) => {
        dispatch(editWord({ flashcardId, category, newWord: editedWords[flashcardId] }));
        dispatch(editMeaning({ flashcardId, category, newMeaning: editedMeanings[flashcardId] }));
        setIsEditing({
            ...isEditing,
            [flashcardId]: false,
        });
    };


    return (
        <Wrapper>
            {Object.keys(flashcards).map(category => (
                <CategoryWrapper key={category}>
                    <Category>
                        {category}
                        <EditSetButton onClick={() => handleEditSetFlashcards(category)}>Edit set</EditSetButton>
                    </Category>
                    <Flashcards>
                        {flashcards[category].map(flashcard => (
                            <Flashcard key={flashcard.id}>
                                {isEditSet && currentCategory === category && (
                                    <>
                                        <RemoveButton
                                            onClick={() => handleRemoveFlashcard(flashcard.id, category)}
                                        >
                                            ✖
                                        </RemoveButton>
                                        <button onClick={() => handleEditFlashcard(flashcard.id)}>
                                            edytuj
                                        </button>
                                    </>
                                )}
                                <Word>
                                    {isEditing[flashcard.id] ? (
                                        <input
                                            value={editedWords[flashcard.id] || flashcard.word}
                                            onChange={(event) => handleWordChange(flashcard.id, event)}
                                        />
                                    ) : (
                                        flashcard.word
                                    )}
                                </Word>
                                <Word $second>
                                    {isEditing[flashcard.id] ? (
                                        <input
                                            value={editedMeanings[flashcard.id] || flashcard.meaning}
                                            onChange={(event) => handleMeaningChange(flashcard.id, event)}
                                        />
                                    ) : (
                                        flashcard.meaning
                                    )}
                                </Word>
                                {isEditing[flashcard.id] && (
                                    <button onClick={() => handleSaveWord(flashcard.id, category)}>
                                        Save
                                    </button>
                                )}
                            </Flashcard>
                        ))}
                    </Flashcards>
                </CategoryWrapper>
            ))}
        </Wrapper>
    );
};

export default YourFlashcards;