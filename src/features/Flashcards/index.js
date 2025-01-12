import { useState } from "react";
import { Flashcard, FlashcardContent, Wrapper } from "./styled";
import { useDispatch } from "react-redux";
import { addFlashcard } from "./flashcardsSlice";
import { nanoid } from "@reduxjs/toolkit";

const Flashcards = () => {
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");
    const dispatch = useDispatch();
    console.log(word, meaning)

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addFlashcard({
            id: nanoid(),
            word,
            meaning,
        }));
    };

    return (
        <Wrapper>
            <Flashcard>
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
                    <button>Dodaj</button>
                </form>
            </Flashcard>
        </Wrapper>
    );
};

export default Flashcards;