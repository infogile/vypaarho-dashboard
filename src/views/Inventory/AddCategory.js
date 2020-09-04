import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllCategory, createACategory } from "../../actions";
class AddCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      error: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.name.length > 2) {
      var exist = this.props.categories.find(
        (category) => category.name === this.state.name
      );
      // console.log(exist);
      if (exist) {
        this.setState({ error: "Already exist" });
      } else {
        this.props.createACategory(this.state);
        this.setState({ error: "" });
        this.modalClose.click();
      }
    } else {
      this.setState({ error: "Name must greater then two" });
    }
  }
  componentDidMount() {
    this.props.getAllCategory();
  }
  render() {
    return (
      <div
        className="modal fade"
        id="addCategory"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addCategorylabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCategorylabel">
                Create a Category
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={(element) => (this.modalClose = element)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.state.error ? (
                <div className="alert alert-danger" role="alert">
                  {this.state.error}
                </div>
              ) : null}
              <div className="row">
                <div className="col-md-12 form-group mb-3">
                  <label htmlFor="categoryname">Name</label>
                  <input
                    className="form-control"
                    id="categoryname"
                    type="text"
                    value={this.state.name}
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                    placeholder="Enter category name"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onSubmit}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddCategory.propTypes = {
  getAllCategory: PropTypes.func.isRequired,
  createACategory: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  categories: state.app.category,
});
export default connect(mapStateToProps, { getAllCategory, createACategory })(
  AddCategory
);
