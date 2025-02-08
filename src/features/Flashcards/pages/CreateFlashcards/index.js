import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../../common/Container";
import CategoryTiles from "./CategoryTiles";
import { addCategory, addFlashcard, selectCurrentCategory, selectFlashcardsByCategory, setCurrentCategory } from "../../flashcardsSlice";
import {
    StyledSection,
    Wrapper,
    Title,
    SectionInput,
    SectionButton,
    SectionForm
} from "./styled";

const CreateFlashcards = () => {
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");
    const [category, setCategory] = useState("");
    const [isCategoryAdded, setIsCategoryAdded] = useState(false);

    const currentCategory = useSelector(selectCurrentCategory);

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
        dispatch(setCurrentCategory(category.trim()))
        setIsCategoryAdded(true);
        setCurrentCategory(category.trim());
    };

    return (
        <Container>
            <StyledSection>
                <Title>Add new category</Title>
                <SectionForm onSubmit={onCategorySubmit}>
                    <SectionInput
                        type="text"
                        placeholder="Enter category"
                        value={category}
                        onChange={({ target }) => setCategory(target.value)}
                        required
                    />
                    <SectionButton>Add category</SectionButton>
                </SectionForm>
            </StyledSection>

            <StyledSection>
                <Title>Your categories</Title>
                <CategoryTiles />
            </StyledSection>

            {currentCategory && (
                <Wrapper>
                    <StyledSection $flashcard>
                        <Title>Category: {currentCategory}</Title>
                        <div>
                            <SectionForm
                                $flashcard
                                onSubmit={onFormSubmit}
                            >
                                <SectionInput
                                    type="text"
                                    placeholder="Enter a word"
                                    value={word}
                                    onChange={({ target }) => setWord(target.value)}
                                    required
                                />
                                <SectionInput
                                    type="text"
                                    placeholder="Enter a meaning"
                                    value={meaning}
                                    onChange={({ target }) => setMeaning(target.value)}
                                    required
                                />
                                <SectionButton>Add Flashcard</SectionButton>
                            </SectionForm>
                        </div>
                    </StyledSection>
                </Wrapper>
            )}
        </Container>
    );
};

export default CreateFlashcards;