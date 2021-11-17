import { RouterState } from 'connected-react-router';

import { CasesAction, CasesState } from './Cases';

export type RootState = Readonly<{
  cases: CasesState;
}>;
export type RootAction = CasesAction;

export type GlobalState = RootState & { router: RouterState };
