import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Myboscase } from 'src/types';
import { getCases, addCase, fetchCases } from '../../../redux/Cases';

import { RootState } from '../../../redux/types';

import Create from './Create';

const mapStateToProps = (state: RootState) => ({
  cases: getCases(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addCase: (caseObj: Myboscase) => dispatch(addCase.request({ caseObj })),
  fetchCases: () => dispatch(fetchCases.request({ requestParams: undefined })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
