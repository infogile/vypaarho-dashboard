import axios from "axios";
import {
  GET_ALL_SUPPLIERS,
  GET_ALL_CATEGORY,
  GET_ALL_INVENTORY,
} from "./types";
axios.defaults.baseURL = "https://vyapaarho.herokuapp.com/api";
// export const getDataByFilter = (data) => (dispatch) => {
//     axios
//       .get(`http://192.168.0.106:5000/filter/${data}`)
//       .then((res) => {
//         // console.log(res);
//         dispatch({
//           type: FILTERED_DATA,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

export const getAllSuppliers = () => (dispatch) => {
  axios
    .get("/suppliers")
    .then((res) => {
      dispatch({
        type: GET_ALL_SUPPLIERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const createASupplier = (data) => (dispatch) => {
  axios
    .post("/suppliers", data)
    .then((res) => {
      if (res) {
        // send an alert
        console.log("supplier created");
        dispatch(getAllSuppliers());
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllCategory = () => (dispatch) => {
  axios
    .get("/category")
    .then((res) => {
      dispatch({
        type: GET_ALL_CATEGORY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createACategory = (data) => (dispatch) => {
  axios
    .post("/category", data)
    .then((res) => {
      dispatch(getAllCategory());
    })
    .catch((err) => {
      console.log(err);
    });
};
export const createASubCategory = (data) => (dispatch) => {
  // console.log(data);
  axios
    .post(`/subcategory/${data.id}`, data)
    .then(() => {
      dispatch(getAllCategory());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllInventory = () => (dispatch) => {
  axios
    .get("/product")
    .then((res) => {
      dispatch({
        type: GET_ALL_INVENTORY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteAInventoryProduct = (id) => (dispatch) => {
  // console.log(id);
  axios
    .delete(`/product/${id}`)
    .then((res) => {
      // Dispacth an alert

      dispatch(getAllInventory());
    })
    .catch((err) => {
      console.log(err);
    });
};
