import { Myboscase } from '../../types';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { ActionType, getType } from 'typesafe-actions';
import {
  getAllCases,
  createCase,
  updateCase,
  deleteCase,
} from '../../services/cases';
import {
  fetchCases,
  addCase as addCaseAction,
  updateCase as updateCaseAction,
  deleteCase as deleteCaseAction,
} from './actions';
import { apiCall, CASES } from '../../services';

function* fetchCasesSaga(action: ActionType<typeof fetchCases.request>) {
  try {
    const response = yield call(apiCall, 'GET', CASES); //Get request
    const cases: Myboscase[] = response;
    yield put(fetchCases.success({ cases }));
  } catch (error) {
    console.log(error);
  }
}

export function* addCaseSaga(action: ActionType<typeof addCaseAction.request>) {
  try {
    const caseObj: Myboscase = yield call(
      [axios.post, createCase],
      action.payload.caseObj
    );

    yield put(addCaseAction.success({ caseObj }));
  } catch (error) {
    yield put(addCaseAction.failure({ errorMessage: error.message }));
  } finally {
  }
}

export function* updateCaseSaga(
  action: ActionType<typeof updateCaseAction.request>
) {
  try {
    const caseObj: Myboscase = yield call(
      [axios.patch, updateCase],
      action.payload.caseObj
    );

    yield put(updateCaseAction.success({ caseObj }));
  } catch (error) {
    yield put(addCaseAction.failure({ errorMessage: error.message }));
  } finally {
  }
}

export function* deleteCaseSaga(
  action: ActionType<typeof deleteCaseAction.request>
) {
  try {
    const caseObj: Myboscase = yield call(
      [axios.delete, deleteCase],
      action.payload.caseId
    );

    yield put(deleteCaseAction.success({ caseObj }));
  } catch (error) {
    yield put(deleteCaseAction.failure({ errorMessage: error.message }));
  } finally {
  }
}

export default function* casesSagas() {
  yield takeEvery(getType(fetchCases.request), fetchCasesSaga);
  yield takeEvery(getType(addCaseAction.request), addCaseSaga);
  yield takeEvery(getType(updateCaseAction.request), updateCaseSaga);
  yield takeEvery(getType(deleteCaseAction.request), deleteCaseSaga);
}
