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
    console.log(product)
  return {
    type: type.ADD_PRODUCT,
    product
  };
};
