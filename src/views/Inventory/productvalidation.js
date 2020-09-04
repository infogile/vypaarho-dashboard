import Validator from "validator";
export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);
export const productvalidator = (data) => {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.supplier = !isEmpty(data.supplier) ? data.supplier : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.subCategory = !isEmpty(data.subCategory) ? data.subCategory : "";
  data.multi = !isEmpty(data.multi) ? data.multi : "";
  data.cost = !isEmpty(data.cost) ? data.cost : "";
  data.stock = !isEmpty(data.stock) ? data.stock : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "product name is required";
  }
  if (Validator.isEmpty(data.supplier)) {
    errors.supplier = "Supplier name is required";
  }
  if (Validator.isEmpty(data.category)) {
    errors.category = "Category name is requires";
  }
  if (Validator.isEmpty(data.subCategory)) {
    errors.category = "Sub category name is requires";
  }

  if (!data.multi) {
    if (Validator.isEmpty(data.cost)) {
      errors.cost = "cost is requires";
    }
    if (Validator.isEmpty(data.stock)) {
      errors.stock = "stock is requires";
    }
  }

  if (!isEmpty(errors)) {
    return errors;
  } else {
    return false;
  }
};
