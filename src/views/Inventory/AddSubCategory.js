import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createASubCategory } from "../../actions";
class AddSubCategory extends React.Component {
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
      var exist = this.props.category.find(
        (category) => category.name === this.state.name
      );
      // console.log(exist);
      if (exist) {
        this.setState({ error: "Already exist" });
      } else {
        this.props.createASubCategory({
          name: this.state.name,
          id: this.props.categoryId,
        });
        this.setState({ error: "" });
        this.modalClose.click();
      }
    } else {
      this.setState({ error: "Name must greater then two" });
    }
  }
  render() {
    return (
      <div
        className="modal fade"
        id="addSubCategory"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addSubCategorylabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addSubCategorylabel">
                Create a Sub Category
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
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    id="name"
                    value={this.state.name}
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                    type="text"
                    placeholder="Enter sub category name"
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

AddSubCategory.propTypes = {
  createASubCategory: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  category: state.app.category,
});
export default connect(mapStateToProps, { createASubCategory })(AddSubCategory);
