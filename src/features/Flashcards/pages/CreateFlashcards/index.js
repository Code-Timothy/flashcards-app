import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Flashcard, Form, Wrapper, Category } from "../../styled";
import { Container } from "../../../../common/Container";
import { addCategory, addFlashcard, selectGlobalCategory } from "../../flashcardsSlice";

const CreateFlashcards = () => {
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
        <Container>
            <Wrapper>
                {!globalCategory && (
                    <Flashcard $category>
                        <form onSubmit={onCategorySubmit}>
                            <input
                                type="text"
                                placeholder="Enter category"
                                value={category}
                                onChange={({ target }) => setCategory(target.value)}
                                required
                            />
                            <button>Add category</button>
                        </form>
                    </Flashcard>
                )}
                {globalCategory && (
                    <Flashcard>
                        <Category>{globalCategory}</Category>
                        <Form onSubmit={onFormSubmit}>
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
                        </Form>
                    </Flashcard>
                )}
            </Wrapper >
        </Container>
    );
};

export default CreateFlashcards;