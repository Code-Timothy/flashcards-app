import { useState } from "react";
import { Flashcard, FlashcardContent, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, addFlashcard, selectGlobalCategory } from "./flashcardsSlice";
import { nanoid } from "@reduxjs/toolkit";

const Flashcards = () => {
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");
    const [category, setCategory] = useState("");
    const globalCategory = useSelector(selectGlobalCategory);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addFlashcard({
            id: nanoid(),
            word: word.trim(),
            meaning: meaning.trim(),
            globalCategory: globalCategory || category,
        }));
        setWord("");
        setMeaning("");
    };

    const onCategorySubmit = (event) => {
        event.preventDefault();

        dispatch(addCategory(category.trim()));
    };

    return (
        <Wrapper>
            <Flashcard>
                {!globalCategory && (
                    <form onSubmit={onCategorySubmit}>
                        <input
                            type="text"
                            placeholder="Enter category"
                            value={category}
                            onChange={({ target }) => setCategory(target.value)}
                        />
                        <button>Add category</button>
                    </form>
                )}
                {globalCategory && (
                    <form onSubmit={onFormSubmit}>
                        <input
                            type="text"
                            placeholder="Enter a word"
                            value={word}
                            onChange={({ target }) => setWord(target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Enter a meaning"
                            value={meaning}
                            onChange={({ target }) => setMeaning(target.value)}
                            required
                        />
                        <button>Add</button>
                    </form>
                )}
            </Flashcard>
        </Wrapper>
    );
};

export default Flashcards;