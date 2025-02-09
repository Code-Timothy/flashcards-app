import { call, takeEvery, select, put, takeLatest } from "redux-saga/effects";
import { saveFlashcardsInLocalStorage } from "./flashcardsLocalStorage";
import { fetchExampleFlashcardsRequest, fetchExampleFlashcardsSuccess, selectFlashcardsState } from "./flashcardsSlice";
import { fetchExampleFlashcards } from "./fetchExampleFlashcards";

function* flashcardsLocalStorageHandler() {
    try {
        const flashcards = yield select(selectFlashcardsState);
        yield call(saveFlashcardsInLocalStorage, "flashcards", flashcards);
    } catch (error) {
        yield console.error("Error saving flashcards to localStorage:", error);
    }
};

function* fetchExampleFlashcardsHandler() {
    try {
        const exampleFlashcards = yield (call(fetchExampleFlashcards));
        yield put(fetchExampleFlashcardsSuccess({ exampleFlashcards }));
    } catch (error) {
        yield call(alert, "Something went wrong with fetching example flashcards.");
    }
};

export function* watchFlashcardsLocalStorage() {
    yield takeEvery("*", flashcardsLocalStorageHandler);
};

export function* watchFetchExampleFlashcards() {
    yield takeLatest(fetchExampleFlashcardsRequest.type, fetchExampleFlashcardsHandler);
};