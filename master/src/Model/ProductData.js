var randomId = require("random-id");

const ProductData = [
  {
    id: randomId(5, "0"),
    name: "White DGK Script Te",
    description: "White DGK Script Te",
    price: 10,
    rating: 1,
    sizes: ["S", "XS", "ML"],
    image: "img1.jpg"
  },
  {
    id: randomId(5, "0"),
    name: "Cat Tee Black T-Shirt",
    description: "Cat Tee Black T-Shirt",
    price: 20,
    rating: 1,
    sizes: ["S", "XL"],
    image: "img2.jpg"
  },
  {
    id: randomId(5, "0"),
    name: "Dark Thug Blue-Navy T-Shirt",
    description: "Dark Thug Blue-Navy T-Shirt",
    price: 12,
    rating: 1,
    sizes: ["M", "L"],
    image: "img3.jpg"
  },
  {
    id: randomId(5, "0"),
    name: "Skuul",
    description: "Skuul",
    price: 30,
    rating: 1,
    sizes: ["S", "M"],
    image: "img5.jpg"
  },
  {
    id: randomId(5, "0"),
    name: "Wine Skul T-Shirt",
    description: "Wine Skul T-Shirt",
    price: 123,
    rating: 1,
    sizes: ["L", "XL"],
    image: "img4.jpg"
  },
  {
    id: randomId(5, "0"),
    name: "Danger Knife Grey",
    description: "Danger Knife Grey",
    price: 10,
    rating: 1,
    sizes: ["S", "XS"],
    image: "img1.jpg"
  }
];
export default ProductData;
