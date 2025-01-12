import { useState } from "react";
import { useDispatch } from "react-redux";
import { FlashCard, Wrapper } from "./styled";
import { fetchDictionaryApiRequest } from "./flashcardsSlice";

const Flashcards = () => {
    const [word, setWord] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchDictionaryApiRequest(word));
    };

    return (
        <Wrapper>
            <FlashCard>
                <form onSubmit={onFormSubmit}>
                    <input
                        type="text"
                        value={word}
                        onChange={({ target }) => setWord(target.value)}
                        required
                    />
                    <button>Kliknij</button>
                </form>
            </FlashCard>
        </Wrapper>
    );
};

export default Flashcards;