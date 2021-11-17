import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Myboscase } from 'src/types';
import {
  getCases,
  fetchCases,
  updateCase,
  deleteCase,
} from '../../../redux/Cases';

import { RootState } from '../../../redux/types';

import Cases from './Cases';

const mapStateToProps = (state: RootState) => ({
  cases: getCases(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCases: () => dispatch(fetchCases.request({ requestParams: undefined })),
  deleteCase: (caseId: string) => dispatch(deleteCase.request({ caseId })),
  updateCase: (caseObj: Myboscase) => dispatch(updateCase.request({ caseObj })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cases);
