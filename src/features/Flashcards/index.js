import { useDispatch } from "react-redux";
import { FlashCard, FlashCardContent, Wrapper } from "./styled";
import { fetchDictionaryApiRequest } from "./flashcardsSlice";

const Flashcards = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchDictionaryApiRequest());
    };

    return (
        <Wrapper>
            <FlashCard>
                <FlashCardContent>test word
                    <button onClick={handleClick}>Kliknij</button>
                </FlashCardContent>
            </FlashCard>
        </Wrapper>
    );
};

export default Flashcards;