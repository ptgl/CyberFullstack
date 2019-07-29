import ListOfProducts from "./ListOfProducts";
import ProductData from "./ProductData";
import Product from "./Product";

let listOfProducts = new ListOfProducts();

for (let item of ProductData) {
  listOfProducts.addNewProduct(
    new Product(
      item.id,
      item.desc,
      item.name,
      item.rate,
      item.price,
      item.sizes,
      item.img
    )
  );
}

export default listOfProducts;
