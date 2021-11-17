import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Myboscase } from 'src/types';
import { getCases, updateCase, fetchCases } from '../../../redux/Cases';

import { RootState } from '../../../redux/types';

import Edit from './Edit';

const mapStateToProps = (state: RootState) => ({
  cases: getCases(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCase: (caseObj: Myboscase) => dispatch(updateCase.request({ caseObj })),
  fetchCases: () => dispatch(fetchCases.request({ requestParams: undefined })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
