import { connect } from "react-redux";
import Category from "../../components/dashboard/Category";
import { perilSelected } from "../../actions/peril";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  perilSelected: (peril, category) => dispatch(perilSelected(peril, category)),
});

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category,
);

export default CategoryContainer;
