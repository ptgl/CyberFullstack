import type from "../const";

export const openAddModal = () => {
  return {
    type: type.ADD
  };
};

export const openEditModal = () => {
  return {
    type: type.EDIT
  };
};

export const addProduct = product => {
  console.log(product);
  return {
    type: type.ADD_PRODUCT,
    product
  };
};

export const deleteProduct = product => {
  // console.log(product);
  return {
    type: type.DELETE_PRODUCT,
    product
  };
};

export const getEditingProduct = product => {
  // console.log(product);
  return {
    type: type.GET_EDITING_PRODUCT,
    product
  };
};

export const editProduct = product => {
  // console.log(product);
  return {
    type: type.EDIT_PRODUCT,
    product
  };
};
