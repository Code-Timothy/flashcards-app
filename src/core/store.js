import { configureStore } from "@reduxjs/toolkit";
import { flashcardsReducer } from "../features/Flashcards/flashcardsSlice";
import { watchFlashcardsLocalStorage } from "../features/Flashcards/flashcardsSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        flashcards: flashcardsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFlashcardsLocalStorage);

export default store;