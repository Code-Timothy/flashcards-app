import { takeLatest, call, put } from "redux-saga/effects";
import { fetchDictionaryApiFailure, fetchDictionaryApiRequest, fetchDictionaryApiSuccess } from "./flashcardsSlice";
import { fetchDictionaryApi } from "./fetchDictionaryApi";

function* fetchDictionaryApiHandler(action) {
    try {
        const data = yield call(fetchDictionaryApi, (action.payload));
        yield put(fetchDictionaryApiSuccess(data));
        yield call(console.log(data))
    } catch (error) {
        yield put(fetchDictionaryApiFailure(error.message))
    }
};

export function* watchFetchDictionaryApi() {
    yield takeLatest(fetchDictionaryApiRequest.type, fetchDictionaryApiHandler);
};