import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getCases, fetchCases } from '../../../redux/Cases';

import { RootState } from '../../../redux/types';

import Section2 from './Section2';

const mapStateToProps = (state: RootState) => ({
  cases: getCases(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCases: () => dispatch(fetchCases.request({ requestParams: undefined })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Section2);
