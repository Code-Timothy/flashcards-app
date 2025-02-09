import { all } from "redux-saga/effects";
import { watchFetchExampleFlashcards, watchFlashcardsLocalStorage } from "../features/Flashcards/flashcardsSaga";

export default function* rootSaga() {
    yield all([
        watchFetchExampleFlashcards(),
        watchFlashcardsLocalStorage(),
    ]);
};