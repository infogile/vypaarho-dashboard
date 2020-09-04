import React from "react";
import ReactDatasheet from "react-datasheet";
import Select from "react-select";
import { connect } from "react-redux";
import { productvalidator, isEmpty } from "./productvalidation";
import AddSubCategory from "./AddSubCategory";
const header = [
  {
    value: "Color",
    readOnly: true,
  },
  {
    value: "Size",
    readOnly: true,
  },
  {
    value: "Stock",
    readOnly: true,
  },
  {
    value: "Cost",
    readOnly: true,
  },
];

const colors = ["Black", "White", "Green"];
const size = ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "1X", "2X"];
class AddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      supplier: {},
      category: {},
      subCategory: {},
      cost: "",
      stock: "",
      multiProduct: false,
      size: [],
      color: [],
      grid: [],
      error: {},
    };
    this.onProductTypeChange = this.onProductTypeChange.bind(this);
    this.onCellsChanged = this.onCellsChanged.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChangeSupplier = this.handleChangeSupplier.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeSubCategory = this.handleChangeSubCategory.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.dataSheet = this.dataSheet.bind(this);
  }
  handleChangeColor(color) {
    if (color) {
      this.setState({ color }, () => {
        this.dataSheet();
      });
    } else {
      this.setState({ color: [] }, () => {
        this.dataSheet();
      });
    }
  }
  handleChangeSupplier(supplier) {
    this.setState({ supplier });
  }
  handleChangeCategory(category) {
    this.setState({ category: category });
  }
  handleChangeSubCategory(subCategory) {
    this.setState({ subCategory });
  }
  handleChangeSize(size) {
    if (size) {
      this.setState({ size }, () => {
        this.dataSheet();
      });
    } else {
      this.setState({ size: [] }, () => {
        this.dataSheet();
      });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onProductTypeChange() {
    var array = this.state.grid;
    array.push(header);
    this.state.color.forEach((color) => {
      this.state.size.forEach((size) => {
        array.push([
          { value: color, readOnly: true },
          { value: size, readOnly: true },
          { value: 0 },
          { value: 0 },
        ]);
      });
    });
    if (!this.state.multiProduct) {
      this.setState({ multiProduct: !this.state.multiProduct, grid: array });
    } else {
      this.setState({ grid: [], multiProduct: !this.state.multiProduct });
    }
  }
  onCellsChanged(changes) {
    if (Number(changes[0].value)) {
      const grid = this.state.grid;
      changes.forEach(({ cell, row, col, value }) => {
        grid[row][col] = { ...grid[row][col], value };
      });
      this.setState({ grid });
    }
  }

  dataSheet() {
    var array = [];
    array.push(header);
    this.state.color.forEach((e) => {
      this.state.size.forEach((s) => {
        array.push([
          { value: e, readOnly: true },
          { value: s, readOnly: true },
          { value: 0 },
          { value: 0 },
        ]);
      });
    });
    this.setState({ grid: array });
  }

  inventory() {
    var data = {};
    data.name = this.state.name;
    data.supplier = this.state.supplier._id;
    data.category = this.state.category._id;
    data.subCategory = this.state.subCategory._id;
    data.multi = this.state.multiProduct;
    data.cost = this.state.cost;
    data.stock = this.state.stock;
    if (!this.state.multiProduct) {
      var error = productvalidator(data);
      if (error) {
        this.setState({ error });
      } else {
        console.log(data);
      }
    } else {
      data.attributes = [
        { id: 1, options: this.state.color },
        { id: 2, options: this.state.size },
      ];
      var products = this.state.grid;
      products.splice(0, 1);
      data.products = [];
      products.forEach((product) => {
        data.products.push({
          attributes: [
            { id: 1, option: product[0].value },
            { id: 2, option: product[1].value },
          ],
          stock: product[2].value,
          purchaseCost: product[3].value,
        });
      });
      if (this.state.color.length > 0 && this.state.size.length > 0) {
        var error = productvalidator(data);
        if (error) {
          this.setState({ error });
        } else {
          console.log(data);
        }
      } else {
        var error = {};
        error.message = "select at least one color or one size";
        this.setState({ error: error });
      }
    }
  }

  render() {
    const { supplier, category, subCategory } = this.state;
    const { suppliers, categories } = this.props;
    return (
      <>
        <div
          className="modal fade"
          id="addInventory"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addInventorylabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addInventorylabel">
                  Add product to Inventory
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
                {!isEmpty(this.state.error) ? (
                  <>
                    {Object.keys(this.state.error).map((key) => (
                      <div
                        className="alert alert-danger"
                        key={key}
                        role="alert"
                      >
                        {this.state.error[key]}
                      </div>
                    ))}
                  </>
                ) : null}
                <form>
                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="productname">Name</label>
                      <input
                        className="form-control"
                        id="productname"
                        type="text"
                        placeholder="Enter your product name"
                        name="name"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="supplier" className="input-label-button">
                        <span> Select Supplier</span>
                        <button
                          className="btn btn-primary btn-sm m-1"
                          type="button"
                          data-toggle="modal"
                          data-target="#addSupplier"
                        >
                          create supplier
                        </button>
                      </label>
                      <Select
                        value={supplier}
                        onChange={this.handleChangeSupplier}
                        options={suppliers}
                        getOptionLabel={(option) =>
                          option.name ? `${option.name}` : "Select a supplier"
                        }
                        getOptionValue={(option) => option}
                      />
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="category" className="input-label-button">
                        <span> Select Category</span>
                        <button
                          className="btn btn-primary btn-sm m-1"
                          type="button"
                          data-toggle="modal"
                          data-target="#addCategory"
                        >
                          create category
                        </button>
                      </label>
                      <Select
                        value={category}
                        onChange={this.handleChangeCategory}
                        options={categories.filter(
                          (category) => !category.parent
                        )}
                        getOptionLabel={(option) =>
                          option.name ? `${option.name}` : "Select a category"
                        }
                        getOptionValue={(option) => option}
                      />
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label
                        htmlFor="subcategory"
                        className="input-label-button"
                      >
                        <span> Select Sub Category</span>
                        <button
                          className="btn btn-primary btn-sm m-1"
                          type="button"
                          data-toggle="modal"
                          data-target="#addSubCategory"
                        >
                          create sub category
                        </button>
                      </label>
                      <Select
                        value={subCategory}
                        onChange={this.handleChangeSubCategory}
                        options={categories.filter(
                          (e) => e.parent === this.state.category._id
                        )}
                        getOptionLabel={(option) =>
                          option.name
                            ? `${option.name}`
                            : "Select a sub category"
                        }
                        getOptionValue={(option) => option}
                        isDisabled={category._id ? false : true}
                      />
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label
                        className="checkbox checkbox-outline-primary"
                        htmlFor="multi"
                      >
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="multi"
                          onChange={this.onProductTypeChange}
                        />
                        <span>Multi Product</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    {!this.state.multiProduct ? (
                      <>
                        <div className="col-md-12 form-group mb-3">
                          <label htmlFor="cost">Cost</label>
                          <input
                            className="form-control"
                            id="cost"
                            type="text"
                            placeholder="Enter your cost"
                            value={this.state.cost}
                            name="cost"
                            onChange={this.onChange}
                          />
                        </div>
                        <div className="col-md-12 form-group mb-3">
                          <label htmlFor="stock">stock</label>
                          <input
                            className="form-control"
                            id="stock"
                            type="text"
                            placeholder="Enter your stock"
                            value={this.state.stock}
                            name="stock"
                            onChange={this.onChange}
                          />
                        </div>
                      </>
                    ) : null}
                    {this.state.multiProduct ? (
                      <>
                        <div className="col-md-12 form-group mb-3">
                          <label
                            htmlFor="productcolor"
                            className="input-label-button"
                          >
                            <span> Select Color</span>
                            <button
                              className="btn btn-primary btn-sm m-1"
                              onClick={(e) => {
                                e.preventDefault();
                                this.setState({ color: colors }, () => {
                                  this.dataSheet();
                                });
                              }}
                            >
                              select all colors
                            </button>
                          </label>
                          <Select
                            isMulti
                            name="colors"
                            value={this.state.color}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={this.handleChangeColor}
                            options={colors}
                            getOptionLabel={(option) => option}
                            getOptionValue={(option) => option}
                          />
                        </div>
                        <div className="col-md-12 form-group mb-3">
                          <label
                            htmlFor="productsize"
                            className="input-label-button"
                          >
                            <span> Select Size</span>
                            <button
                              className="btn btn-primary btn-sm m-1"
                              type="button"
                              onClick={() => {
                                this.setState({ size: size }, () => {
                                  this.dataSheet();
                                });
                              }}
                            >
                              select all sizes
                            </button>
                          </label>
                          <Select
                            isMulti
                            name="size"
                            value={this.state.size}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={this.handleChangeSize}
                            options={size}
                            getOptionLabel={(option) => option}
                            getOptionValue={(option) => option}
                          />
                        </div>
                      </>
                    ) : null}
                  </div>

                  {this.state.multiProduct ? (
                    <DataSheet
                      grid={this.state.grid}
                      onCellsChanged={this.onCellsChanged}
                    />
                  ) : null}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        this.inventory();
                      }}
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <AddSubCategory categoryId={this.state.category._id} />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  suppliers: state.app.suppliers,
  categories: state.app.category,
});
export default connect(mapStateToProps, {})(AddProduct);

class DataSheet extends React.Component {
  valueRenderer = (cell) => cell.value;

  onContextMenu = (e, cell, i, j) =>
    cell.readOnly ? e.preventDefault() : null;
  render() {
    return (
      <>
        <ReactDatasheet
          data={this.props.grid}
          valueRenderer={this.valueRenderer}
          onContextMenu={this.onContextMenu}
          onCellsChanged={this.props.onCellsChanged}
        />
      </>
    );
  }
}
