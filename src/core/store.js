import { configureStore } from "@reduxjs/toolkit";
import { flashcardsReducer } from "../features/Flashcards/flashcardsSlice";
import createSagaMiddleware from "redux-saga";
import { watchFetchDictionaryApi } from "../features/Flashcards/flashcardsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        flashcards: flashcardsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchDictionaryApi);

export default store;