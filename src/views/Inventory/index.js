import React from "react";
import DataTable from "react-data-table-component";
import memoize from "memoize-one";
import "react-datasheet/lib/react-datasheet.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AddProduct from "./AddProduct";
import AddSupplier from "./AddSupplier";
import AddCategory from "./AddCategory";
import AddSubCategory from "./AddSubCategory";

import {
  getAllInventory,
  deleteAInventoryProduct,
  getAllSuppliers,
} from "../../actions";

const columns = memoize((clickHandler) => [
  {
    name: "Sku",
    selector: "sku",
    sortable: true,
  },
  {
    name: "Cost",
    selector: "cost",
    sortable: true,
  },
  {
    name: "Stock",
    selector: "stock",
    sortable: true,
  },
  {
    cell: (row) => <div>{`${row.multi}`}</div>,
  },
  {
    cell: (row) => <div>{row.supplier.name}</div>,
  },

  {
    cell: (row) => (
      <button
        variant="contained"
        color="primary"
        onClick={() => {
          // deleteAInventoryProduct(row._id);
          // console.log(clickHandler);
          clickHandler(row._id);
        }}
        className="btn btn-danger"
      >
        Delete
      </button>
    ),
    button: true,
  },
  {
    cell: (row) => (
      <button
        variant="contained"
        color="primary"
        onClick={() => {
          alert(JSON.stringify(row));
        }}
        className="btn btn-primary"
      >
        Update
      </button>
    ),
    button: true,
  },
]);
class Inventory extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     grid: [
  //       [
  //         { readOnly: true, value: "" },
  //         { value: "color", readOnly: true },
  //         { value: "size", readOnly: true },
  //         { value: "stock", readOnly: true },
  //         { value: "tags", readOnly: true },
  //       ],
  //       [
  //         { readOnly: true, value: 1 },
  //         { value: "blue", readOnly: true },
  //         { value: "L", readOnly: true },
  //         { value: 3 },
  //         { value: "" },
  //       ],
  //     ],
  //   };
  // }
  componentDidMount() {
    this.props.getAllSuppliers();
    this.props.getAllInventory();
  }
  valueRenderer = (cell) => cell.value;
  onCellsChanged = (changes) => {
    const grid = this.state.grid;
    changes.forEach(({ cell, row, col, value }) => {
      grid[row][col] = { ...grid[row][col], value };
    });
    this.setState({ grid });
  };
  onContextMenu = (e, cell, i, j) =>
    cell.readOnly ? e.preventDefault() : null;
  render() {
    const { inventory } = this.props;
    console.log(inventory);
    return (
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-toggle="modal"
                  data-target="#addInventory"
                >
                  Add a product
                </button>
              </div>
              <DataTable
                title="Inventory"
                columns={columns(this.props.deleteAInventoryProduct)}
                data={inventory}
                highlightOnHover={true}
                striped={true}
                pointerOnHover={true}
              />
            </div>
          </div>
        </div>
        <AddProduct />
        <AddCategory />
        <AddSubCategory />
      </div>
    );
  }
}

Inventory.propTypes = {
  getAllInventory: PropTypes.func.isRequired,
  inventory: PropTypes.array.isRequired,
  deleteAInventoryProduct: PropTypes.func.isRequired,
  getAllSuppliers: PropTypes.func.isRequired,
};

const mapToProps = (state) => ({
  inventory: state.app.inventory,
});

export default connect(mapToProps, {
  getAllInventory,
  deleteAInventoryProduct,
  getAllSuppliers,
})(Inventory);
