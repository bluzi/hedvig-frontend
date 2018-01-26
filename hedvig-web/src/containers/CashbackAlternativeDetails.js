import { connect } from "react-redux";
import CashbackAlternativeDetails from "../components/CashbackAlternativeDetails";
import { cashbackActions } from "hedvig-redux";

const mapStateToProps = state => ({
  cashbackAlternatives: state.cashback.alternatives,
});

const mapDispatchToProps = dispatch => ({
  updateCashback: selectedCashback =>
    dispatch(cashbackActions.updateCashback(selectedCashback)),
});

const CashbackAlternativeDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CashbackAlternativeDetails);

export default CashbackAlternativeDetailsContainer;
