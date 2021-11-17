import { all } from 'redux-saga/effects';

import { sagas as casesSagas } from './Cases';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([casesSagas()]);
}
