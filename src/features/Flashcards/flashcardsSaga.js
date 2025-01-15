import { call, takeEvery, select } from "redux-saga/effects";
import { saveFlashcardsInLocalStorage } from "./flashcardsLocalStorage";
import { selectFlashcardsState } from "./flashcardsSlice";

function* flashcardsLocalStorageHandler() {
    try {
        const flashcards = yield select(selectFlashcardsState);
        yield call(saveFlashcardsInLocalStorage, "flashcards", flashcards);
    } catch (error) {
        yield console.error("Error saving flashcards to localStorage:", error);
    }
};

export function* watchFlashcardsLocalStorage() {
    yield takeEvery("*", flashcardsLocalStorageHandler);
};