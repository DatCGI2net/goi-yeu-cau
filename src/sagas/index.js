import { fork } from 'redux-saga/effects';
import watchAllActionSagas from './watchers';

//root saga

export default function* rootSaga() {
    yield fork(watchAllActionSagas);
}