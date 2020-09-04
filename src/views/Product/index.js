import React from "react";
export default class Product extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <div>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-toggle="modal"
                  data-target="#addProduct"
                >
                  Add a Product
                </button>
              </div>
              <div className="table-responsive">
                <table
                  className="display table table-striped table-bordered"
                  id="zero_configuration_table"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="addProduct"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addProductLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addProductLabel">
                  Add a Product
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="sku" className="input-label-button">
                        <span> Test </span>
                        <button
                          className="btn btn-primary btn-sm m-1"
                          type="button"
                          data-toggle="modal"
                          data-target="#createSku"
                        >
                          create sku
                        </button>
                      </label>
                      <select className="form-control">
                        <option disabled selected>
                          Select sku
                        </option>
                        <option>Option 1</option>
                        <option>Option 1</option>
                      </select>
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="name">Tags</label>
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Enter your Product name"
                      />
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="color" className="input-label-button">
                        <span> Color </span>
                        <button
                          className="btn btn-primary btn-sm m-1"
                          type="button"
                          data-toggle="modal"
                          data-target="#createcolor"
                        >
                          create color
                        </button>
                      </label>
                      <select className="form-control">
                        <option disabled selected>
                          Select color
                        </option>
                        <option>Option 1</option>
                        <option>Option 1</option>
                      </select>
                    </div>

                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="Size" className="input-label-button">
                        <span> Size </span>
                        <button
                          className="btn btn-primary btn-sm m-1"
                          type="button"
                          data-toggle="modal"
                          data-target="#createSize"
                        >
                          create Size
                        </button>
                      </label>
                      <select className="form-control">
                        <option disabled selected>
                          Select Size
                        </option>
                        <option>Option 1</option>
                        <option>Option 1</option>
                      </select>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="weight">weight</label>
                      <input
                        className="form-control"
                        id="weight"
                        type="text"
                        placeholder="Enter your Product weight"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="sellingprice">selling price</label>
                      <input
                        className="form-control"
                        id="sellingprice"
                        type="text"
                        placeholder="Enter your Product selling price"
                      />
                    </div>
                    <div className="col-md-4 form-group mb-3">
                      <label htmlFor="productheight">Height</label>
                      <input
                        className="form-control"
                        id="productheight"
                        type="text"
                        placeholder="Enter your Product Height"
                      />
                    </div>

                    <div className="col-md-4 form-group mb-3">
                      <label htmlFor="productwidth">Width</label>
                      <input
                        className="form-control"
                        id="productwidth"
                        type="text"
                        placeholder="Enter your Product Width"
                      />
                    </div>

                    <div className="col-md-4 form-group mb-3">
                      <label htmlFor="productlength">Length</label>
                      <input
                        className="form-control"
                        id="productlength"
                        type="text"
                        placeholder="Enter your Product Length"
                      />
                    </div>
                    <button className="btn btn-small btn-primary">
                      Select a Image
                    </button>
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="createSku"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="createSkulabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="createSkulabel">
                  create sku
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="skuname">Name</label>
                      <input
                        className="form-control"
                        id="skuname"
                        type="text"
                        placeholder="Enter your Sku name"
                      />
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="skudescription">Description</label>
                      <input
                        className="form-control"
                        id="skudescription"
                        type="text"
                        placeholder="Enter your Sku Description"
                      />
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="skusmalldescription">
                        Small Description
                      </label>
                      <input
                        className="form-control"
                        id="skusmalldescription"
                        type="text"
                        placeholder="Enter your Sku Small Description"
                      />
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label
                        htmlFor="skuselectcategory"
                        className="input-label-button"
                      >
                        <span> Select Category </span>
                        <button
                          className="btn btn-primary btn-sm m-1"
                          type="button"
                          data-toggle="modal"
                          data-target="#createCategory"
                        >
                          create category
                        </button>
                      </label>
                      <select className="form-control">
                        <option disabled selected>
                          Select Category
                        </option>
                        <option>Option 1</option>
                        <option>Option 1</option>
                      </select>
                    </div>

                    <div className="col-md-12 form-group mb-3">
                      <label
                        htmlFor="skuselectsubcategory"
                        className="input-label-button"
                      >
                        <span> Select Sub Category </span>
                        <button
                          className="btn btn-primary btn-sm m-1"
                          type="button"
                          data-toggle="modal"
                          data-target="#createSubCategory"
                        >
                          create sub category
                        </button>
                      </label>
                      <select className="form-control">
                        <option disabled selected>
                          Select sub Category
                        </option>
                        <option>Option 1</option>
                        <option>Option 1</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="createCategory"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="createCategorylabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="createCategorylabel">
                  create category
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="categoryname">Name</label>
                      <input
                        className="form-control"
                        id="categoryname"
                        type="text"
                        placeholder="Enter your category name"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="createSubCategory"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="createSubCategorylabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="createSubCategorylabel">
                  create sub category
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="subcategoryname">Name</label>
                      <input
                        className="form-control"
                        id="subcategoryname"
                        type="text"
                        placeholder="Enter your Sub category name"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
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
