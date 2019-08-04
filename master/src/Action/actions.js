import {type} from "../const";

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

export const deleteProduct = productId => {
  return {
    type: type.DELETE_PRODUCT,
    productId
  };
};

export const getEditingProduct = product => {
  return {
    type: type.GET_EDITING_PRODUCT,
    product
  };
};

export const editProduct = product => {
  return {
    type: type.EDIT_PRODUCT,
    product
  };
};


export const addToCart = productId => {
  return {
    type: type.ADD_TO_CART,
    productId
  };
};

export const filterSize = sizes => {
  return {
    type: type.FILTER_SIZE,
    sizes
  };
};