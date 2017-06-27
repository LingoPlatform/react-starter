import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';
import { selectIsInProgress } from '@src/features/spinner/ducks';
import { selectAuth } from '../ducks';
import { apiCallIds } from '../api';

export default UserAuthWrapper({
  authSelector: state => selectAuth(state),
  predicate: auth => auth.user === null,
  authenticatingSelector: state => selectIsInProgress(state, apiCallIds.LOGIN),
  failureRedirectPath: (state, props) =>
    (props.location.query && props.location.query.redirect) || '/',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'LoginWrapper',
  allowRedirectBack: false,
});