import { Myboscase } from '../../types';
import { createAsyncAction } from 'typesafe-actions';

export const fetchCases = createAsyncAction(
  'Studies/FETCH_CASES_REQUEST',
  'Studies/FETCH_CASES_SUCCESS',
  'Studies/FETCH_CASES_FAILURE',
  'Studies/FETCH_CASES_CANCEL'
)<
  { requestParams: Myboscase },
  {
    cases: Myboscase[];
  },
  {
    errorMessage: string;
  },
  undefined
>();

export const addCase = createAsyncAction(
  'Studies/ADD_CASE_REQUEST',
  'Studies/ADD_CASE_SUCCESS',
  'Studies/ADD_CASE_FAILURE',
  'Studies/ADD_CASE_CANCEL'
)<
  { caseObj: Myboscase },
  { caseObj: Myboscase },
  {
    errorMessage: string;
  },
  undefined
>();

export const updateCase = createAsyncAction(
  'Studies/UPDATE_CASE_REQUEST',
  'Studies/UPDATE_CASE_SUCCESS',
  'Studies/UPDATE_CASE_FAILURE',
  'Studies/UPDATE_CASE_CANCEL'
)<
  { caseObj: Myboscase },
  { caseObj: Myboscase },
  {
    errorMessage: string;
  },
  undefined
>();

export const deleteCase = createAsyncAction(
  'Studies/DELETE_CASE_REQUEST',
  'Studies/DELETE_CASE_SUCCESS',
  'Studies/DELETE_CASE_FAILURE',
  'Studies/DELETE_CASE_CANCEL'
)<
  { caseId: string },
  { caseObj: Myboscase },
  {
    errorMessage: string;
  },
  undefined
>();
const actions = {
  fetchCases,
  addCase,
  updateCase,
  deleteCase,
};

export default actions;
