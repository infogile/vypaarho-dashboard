import React from "react";
// create a action for addSupplier;
// and create a type and reducer for add supplier;
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createASupplier } from "../../actions";

class AddSupplier extends React.Component {
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
    // Check for validation
    if (this.state.name.length > 3) {
      var exist = this.props.suppliers.find(
        (supplier) => supplier.name === this.state.name
      );
      if (exist) {
        this.setState({ error: "Supplier already exist" });
      } else {
        this.props.createASupplier(this.state);
        this.setState({ error: "" });
        this.modalClose.click();
      }
    } else {
      this.setState({ error: "Name must greater then three" });
    }
  }

  render() {
    return (
      <div
        className="modal fade"
        id="addSupplier"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addSupplierlabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addSupplierlabel">
                Create a Supplier
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
                  <label htmlFor="suppliername">Name</label>
                  <input
                    className="form-control"
                    id="suppliername"
                    type="text"
                    value={this.state.name}
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                    placeholder="Enter suppplier name"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onSubmit}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddSupplier.propTypes = {
  createASupplier: PropTypes.func.isRequired,
  suppliers: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  suppliers: state.app.suppliers,
});
export default connect(mapStateToProps, { createASupplier })(AddSupplier);
