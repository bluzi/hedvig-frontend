import { connect } from 'react-redux';
import Profile from '../components/Profile';
import {
  cashbackActions,
  chatActions,
  userActions,
  insuranceActions,
  types,
  dialogActions
} from 'hedvig-redux';

const _apiAndNavigateToChat = (dispatch, endpoint, success) => {
  dispatch(
    chatActions.apiAndNavigateToChat({
    method: 'POST',
    url: endpoint,
    body: null,
    SUCCESS: success
  })
  );
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
  cashbackAlternatives: state.cashback.alternatives,
  state,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(userActions.getCurrentUser()),
  getCashbackAlternatives: () =>
    dispatch(cashbackActions.getCashbackAlternatives()),
  updateCashback: selectedCashback =>
    dispatch(cashbackActions.updateCashback(selectedCashback)),
  editPersonalInfo: () =>
    _apiAndNavigateToChat(
      dispatch,
      '/hedvig/initiateUpdate?what=PERSONAL_INFORMATOIN',
      'REQUESTED_PERSONAL_INFO_UPDATE',
    ),
  editFamilyMembers: () =>
    _apiAndNavigateToChat(
      dispatch,
      '/hedvig/initiateUpdate?what=FAMILY_MEMBERS',
      'REQUESTED_FAMILY_MEMBERS_UPDATE',
    ),
  editApartmentInfo: () =>
    _apiAndNavigateToChat(
      dispatch,
      '/hedvig/initiateUpdate?what=APARTMENT_INFORMATION',
      'REQUESTED_APARTMENT_INFO_UPDATE',
    ),
  editSafetyIncreasers: () =>
    _apiAndNavigateToChat(
      dispatch,
      '/hedvig/initiateUpdate?what=SAFETY_INCREASERS',
      'REQUESTED_SAFETY_INCREASERS_UPDATE',
    ),
  editBankAccount: () =>
    _apiAndNavigateToChat(
      dispatch,
      '/hedvig/initiateUpdate?what=BANK_ACCOUNT',
      'REQUESTED_BANK_ACCOUNT_UPDATE',
    ),
  logout: () =>
    dispatch(dialogActions.showDialog({
        title: 'Vill du logga ut?',
        paragraph: 'Om du trycker ja loggas du ut.',
        confirmButtonTitle: 'Ja',
        dismissButtonTitle: 'Nej',
        onConfirm: () => dispatch({ type: types.LOGOUT, payload: {} }),
        onDismiss: () => console.log("User didn't want to logout."),
      }),
    ),
  sendPolicyEmail: () => dispatch(insuranceActions.sendPolicyEmail()),
  dispatch,
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
