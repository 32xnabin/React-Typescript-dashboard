import { ActionType, getType } from 'typesafe-actions';

import { AnyAction } from 'redux';
import { fetchCases, addCase, updateCase, deleteCase } from './actions';
import { Myboscase } from '../../types';

export type CasesAction = ActionType<
  | typeof fetchCases.success
  | typeof fetchCases.failure
  | typeof fetchCases.request
  | typeof addCase.success
  | typeof addCase.failure
  | typeof addCase.request
  | typeof updateCase.success
  | typeof updateCase.failure
  | typeof updateCase.request
  | typeof deleteCase.success
  | typeof deleteCase.failure
  | typeof deleteCase.request
>;

export type CasesState = Readonly<Myboscase[]>;

const initialState: CasesState = [];

const reducer = (
  state: CasesState = initialState,
  action: AnyAction
): CasesState => {
  const typedAction = action as CasesAction;
  switch (typedAction.type) {
    case getType(fetchCases.success):
      return typedAction.payload.cases;

    case getType(addCase.success):
      return [typedAction.payload.caseObj];

    case getType(updateCase.success):
      return [typedAction.payload.caseObj];

    case getType(deleteCase.success):
      return [typedAction.payload.caseObj];

    default:
      return state;
  }
};

export default reducer;
