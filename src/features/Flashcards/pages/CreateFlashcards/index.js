import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flashcard, Form, Wrapper, Category } from "../../styled";
import { Container } from "../../../../common/Container";
import { addCategory, addFlashcard, selectFlashcards, selectGlobalCategory } from "../../flashcardsSlice";

const CreateFlashcards = () => {
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");
    const [category, setCategory] = useState("");
    const globalCategory = useSelector(selectGlobalCategory);
    const flashcards = useSelector(selectFlashcards);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addFlashcard({
            id: flashcards.length !== 0 ? Math.max(...flashcards.map(flashcard => flashcard.id)) + 1 : 1,
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
                    <Flashcard>
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