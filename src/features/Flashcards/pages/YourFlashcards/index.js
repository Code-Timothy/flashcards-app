import { useSelector } from "react-redux";
import { CategoryWrapper, Category, Flashcards, Flashcard, Word, Wrapper } from "./styled";
import { selectFlashcardsByCategory } from "../../flashcardsSlice";

const YourFlashcards = () => {
    const flashcards = useSelector(selectFlashcardsByCategory);
    console.log(flashcards)

    return (
        <Wrapper>
            {Object.keys(flashcards).map(category => (
                <CategoryWrapper key={category}>
                    <Category>{category}</Category>
                    <Flashcards>
                        {flashcards[category].map((flashcard => (
                            <Flashcard>
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