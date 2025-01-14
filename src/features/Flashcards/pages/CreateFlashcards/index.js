import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flashcard, Form, Wrapper, Category } from "../../styled";
import { Container } from "../../../../common/Container";
import { addCategory, addFlashcard, selectFlashcardsByCategory, selectGlobalCategories } from "../../flashcardsSlice";

const CreateFlashcards = () => {
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");
    const [category, setCategory] = useState("");
    const [isCategoryAdded, setIsCategoryAdded] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);

    const globalCategories = useSelector(selectGlobalCategories);
    const flashcardsByCategory = useSelector(selectFlashcardsByCategory);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (!currentCategory) {
            alert("Please select category.");
            return;
        }

        const flashcardsInCategory = flashcardsByCategory[currentCategory] || [];

        dispatch(addFlashcard({
            id: flashcardsInCategory.length + 1,
            word: word.trim(),
            meaning: meaning.trim(),
            category: currentCategory,
        }));
        setWord("");
        setMeaning("");
    };

    const onCategorySubmit = (event) => {
        event.preventDefault();

        dispatch(addCategory(category.trim()));
        setIsCategoryAdded(true);
        setCurrentCategory(category.trim());
    };

    return (
        <Container>
            <div>
                <select
                    value={currentCategory}
                    onChange={({ target }) => setCurrentCategory(target.value)}
                >
                    {globalCategories.map((category, index) => (
                        <option key={index}>{category}</option>
                    ))}
                </select>
            </div>
            <Wrapper>
                {!isCategoryAdded && (
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

                {isCategoryAdded && (
                    <Flashcard>
                        <Category>{currentCategory}</Category>
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
                            <button>Add Flashcard</button>
                        </Form>
                    </Flashcard>
                )}
            </Wrapper >
        </Container>
    );
};

export default CreateFlashcards;